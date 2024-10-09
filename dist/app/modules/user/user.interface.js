"use strict";
/* import { Model } from "mongoose";
import { USER_Role } from "./user.consatand";

export interface CUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role:keyof typeof USER_Role;
  address: string;
  passwordChangedAt?: Date;
}


// Extend the Mongoose Model to include the static method
export interface CUserModel extends Model<CUser> {
  isJWTIssuedBeforePasswordChange(passwordChangedAt: Date, jwtIssuedAt: number): boolean;
}

export type CUserRole = keyof typeof USER_Role; */
Object.defineProperty(exports, "__esModule", { value: true });
