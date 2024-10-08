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



import { Router } from "express";
import { authorizeRoles, isAuthenticatedUser } from "../../middlewares/auth";
import {
  generateVerifyAccountPaymentUrl,
  getAllUser,
  isCapableForPremium,
  updateUserInfo,
  updateUserProfileImage,
} from "./user.controller";
import { multerUpload } from "../../config/cloudinaryMulter";

const router = Router();
router.get("/all", isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.put("/update", isAuthenticatedUser, updateUserInfo);
router.get("/can-have-premium", isAuthenticatedUser, isCapableForPremium);
router.post(
  "/get-varify-url",
  isAuthenticatedUser,
  generateVerifyAccountPaymentUrl
);
router.put(
  "/update-profile-image",
  isAuthenticatedUser,
  multerUpload.single("file"),
  updateUserProfileImage
);
const userRoute = router;
export default userRoute;
