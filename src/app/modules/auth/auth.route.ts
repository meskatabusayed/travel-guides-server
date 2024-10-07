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


import { Router } from "express";
import { authorizeRoles, isAuthenticatedUser } from "../../middlewares/auth";
import {
  authSateController,
  changeRole,
  createUserController,
  forgotPassword,
  genereteAccessToken,
  loginController,
  recoverPassword,
  resetPassword,
} from "./auth.controller";
const router = Router();
router.post("/register", createUserController);

router.post("/login", loginController);
router.get("/auth-state", isAuthenticatedUser, authSateController);
router.post("/refreshToken", genereteAccessToken);
router.put("/reset-password", isAuthenticatedUser, resetPassword);
router.post("/forgot-password", forgotPassword);
router.put("/recover-password", recoverPassword);
router.put(
  "/update-role/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  changeRole
);
const authRoute = router;
export default authRoute;