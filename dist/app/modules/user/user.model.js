"use strict";
/* import { Schema, model } from "mongoose";
import { CUser, CUserModel } from "./user.interface";
import { USER_Role } from "./user.consatand";
import bcrypt from 'bcrypt';
import config from "../../config";

export const CUserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: Object.keys(USER_Role) },
    address: { type: String, required: true },
    passwordChangedAt: { type: Date }
  },{
    timestamps:true
  });

  //pre save middlewere
  CUserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password as string, Number(config.data_salt_rounds));
  next();
});

//post save middlerware hook
CUserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Static method to check if JWT was issued before password change
CUserSchema.statics.isJWTIssuedBeforePasswordChange = function (
  passwordChangedAt: Date,
  jwtIssuedAt: number
) {
  const passwordChangedTime = new Date(passwordChangedAt).getTime() / 1000;
  return passwordChangedTime > jwtIssuedAt;
};


export const User = model<CUser, CUserModel>("User", CUserSchema); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userScheam = new mongoose_1.default.Schema({
    auth: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        ref: "Authentication",
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: false,
        default: "",
    },
}, { timestamps: true });
const User = mongoose_1.default.model("User", userScheam);
exports.default = User;
