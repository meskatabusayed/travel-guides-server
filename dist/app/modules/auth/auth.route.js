"use strict";
/* import express from "express";
import { AuthControllers } from "./auth.controllar";
// import validationRequest from "../../middlewares/validaedRequest";
// import { AuthValidation } from "./auth.validation";
import validationRequest from "../../middlewares/validaedRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post('/auth/login',validationRequest(AuthValidation.loginValidatoinSchema), AuthControllers.loginUserDB);

// router.post('/auth/refresh-token', validationRequest(AuthValidation.refreshTokenValidationSchema), AuthControllers.refreshTokenDB);

export const AuthRoutes = router; */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post("/register", auth_controller_1.createUserController);
router.post("/login", auth_controller_1.loginController);
router.get("/auth-state", auth_1.isAuthenticatedUser, auth_controller_1.authSateController);
router.post("/refreshToken", auth_controller_1.genereteAccessToken);
router.put("/reset-password", auth_1.isAuthenticatedUser, auth_controller_1.resetPassword);
router.post("/forgot-password", auth_controller_1.forgotPassword);
router.put("/recover-password", auth_controller_1.recoverPassword);
router.put("/update-role/:id", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), auth_controller_1.changeRole);
const authRoute = router;
exports.default = authRoute;
