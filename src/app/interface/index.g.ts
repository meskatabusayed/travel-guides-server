/* eslint-disable @typescript-eslint/no-namespace */
//ok
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}