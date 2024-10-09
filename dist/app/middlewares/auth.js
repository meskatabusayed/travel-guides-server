"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.isAuthenticatedUserOptional = exports.isAuthenticatedUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const auth_model_1 = __importDefault(require("../modules/auth/auth.model"));
const user_model_1 = __importDefault(require("../modules/user/user.model"));
const isAuthenticatedUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const getToken = req.header("Authorization");
        if (!getToken)
            return res.status(401).json({ message: "Invalid Authentication." });
        const token = getToken.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token not provided" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
        if (!decoded)
            return res.status(401).json({ message: "Invalid Authentication." });
        const user = yield user_model_1.default.findOne({
            auth: (_a = decoded === null || decoded === void 0 ? void 0 : decoded.user) === null || _a === void 0 ? void 0 : _a.id,
        });
        if (!user)
            return res.status(404).json({ message: "User does not exist." });
        const auth = yield auth_model_1.default.findOne({ email: user.email });
        if (!auth)
            return res.status(404).json({ message: "User does not exist." });
        const payload = user.toObject();
        req.user = Object.assign(Object.assign({}, payload), { role: auth.role });
        next();
    }
    catch (err) {
        return res.status(401).json({ message: err.message });
    }
});
exports.isAuthenticatedUser = isAuthenticatedUser;
const isAuthenticatedUserOptional = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const getToken = req.header("Authorization");
        if (!getToken) {
            return next();
        }
        const token = getToken.split(" ")[1];
        if (!token || token === "undifined") {
            return next();
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
        if (!decoded)
            return res.status(401).json({ message: "Invalid Authentication." });
        const user = yield user_model_1.default.findOne({
            auth: (_b = decoded === null || decoded === void 0 ? void 0 : decoded.user) === null || _b === void 0 ? void 0 : _b.id,
        });
        if (!user)
            return next();
        const auth = yield auth_model_1.default.findOne({ email: user.email });
        if (!auth)
            return next();
        const payload = user.toObject();
        req.user = Object.assign(Object.assign({}, payload), { role: auth.role });
        next();
    }
    catch (err) {
        return res.status(401).json({ message: err.message });
    }
});
exports.isAuthenticatedUserOptional = isAuthenticatedUserOptional;
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        var _a, _b;
        if (!roles.includes((_a = req.user) === null || _a === void 0 ? void 0 : _a.role)) {
            return next(new AppError_1.default(403, `User type: ${(_b = req.user) === null || _b === void 0 ? void 0 : _b.role} is not allowed to access this resouce `));
        }
        next();
    };
};
exports.authorizeRoles = authorizeRoles;
