/* import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
// import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import AppError from "../Error/AppError";
import { CUserRole } from "../Module/User/user.interface";
import { User } from "../Module/User/user.model";
import catchAsync from "../utils/catchAsync";


export const AuthValidated = (...requierdRole: CUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // Decode the token
    const decoded = jwt.verify(
      token.split(' ')[1],
      config.jwt_access_secret as string
    ) as JwtPayload;
 
    const { userId } = decoded;
    
    // Find the user by ID
    const isExistsUser = await User.findById(userId);
    if (!isExistsUser) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // Check if the user's role is included in the required roles
    if (!requierdRole.includes(isExistsUser.role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You have no access to this route"
      );
    }

    // Attach decoded user to request
    req.user = decoded as JwtPayload;
    next();
  });
}; */


//auth related middleware........

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppError";
import Authentication from "../modules/auth/auth.model";
import User from "../modules/user/user.model";

export const isAuthenticatedUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const getToken = req.header("Authorization");

    if (!getToken)
      return res.status(401).json({ message: "Invalid Authentication." });

    const token = getToken.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    );
    

    if (!decoded)
      return res.status(401).json({ message: "Invalid Authentication." });

    const user = await User.findOne({
      auth: decoded?.user?.id,
    });
    if (!user) return res.status(404).json({ message: "User does not exist." });
    const auth = await Authentication.findOne({ email: user.email });
    if (!auth) return res.status(404).json({ message: "User does not exist." });

   

    const payload = user.toObject();
    req.user = { ...payload, role: auth.role };

    next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
};

export const isAuthenticatedUserOptional = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const getToken = req.header("Authorization");
    if (!getToken) {
      return next();
    }

    const token = getToken.split(" ")[1];

    if (!token || token === "undifined") {
      return next();
    }

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    );

    if (!decoded)
      return res.status(401).json({ message: "Invalid Authentication." });

    const user = await User.findOne({
      auth: decoded?.user?.id,
    });

    if (!user) return next();

    const auth = await Authentication.findOne({ email: user.email });

    if (!auth) return next();

    const payload = user.toObject();
    req.user = { ...payload, role: auth.role };

    next();
  } catch (err: any) {
   
    return res.status(401).json({ message: err.message });
  }
};

export const authorizeRoles = (...roles: any) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role)) {
      return next(
        new AppError(
          403,
          `User type: ${req.user?.role} is not allowed to access this resouce `
        )
      );
    }
    next();
  };
};