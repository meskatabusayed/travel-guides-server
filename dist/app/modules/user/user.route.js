"use strict";
/* import express from "express";
import { UserControllars } from "./user.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { UserValidation } from "./user.validation";
import { USER_Role } from "./user.consatand";
import { AuthValidated } from "../../middlewares/auth.validation";

const router = express.Router();

//create User
router.post(
  "/auth/signup",
  validationRequest(UserValidation.createUserValidationSchema),
  UserControllars.createUserDB
);

//get USer
router.get("/users", AuthValidated(USER_Role.admin), UserControllars.getUserDB);

//updte users
router.put("/user/:id", UserControllars.updateUserDB);

export const UserRoutes = router; */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const user_controller_1 = require("./user.controller");
const cloudinaryMulter_1 = require("../../config/cloudinaryMulter");
const router = (0, express_1.Router)();
router.get("/all", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), user_controller_1.getAllUser);
router.put("/update", auth_1.isAuthenticatedUser, user_controller_1.updateUserInfo);
router.get("/can-have-premium", auth_1.isAuthenticatedUser, user_controller_1.isCapableForPremium);
router.post("/get-varify-url", auth_1.isAuthenticatedUser, user_controller_1.generateVerifyAccountPaymentUrl);
router.put("/update-profile-image", auth_1.isAuthenticatedUser, cloudinaryMulter_1.multerUpload.single("file"), user_controller_1.updateUserProfileImage);
const userRoute = router;
exports.default = userRoute;
