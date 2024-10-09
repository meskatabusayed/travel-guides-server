"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//post route...
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const validator_1 = require("../../middlewares/validator");
const post_controller_1 = require("./post.controller");
const post_validation_1 = require("./post.validation");
const cloudinaryMulter_1 = require("../../config/cloudinaryMulter");
const router = (0, express_1.Router)();
router.post("/create", auth_1.isAuthenticatedUser, (0, validator_1.validSchema)(post_validation_1.postValidationSchema), post_controller_1.postController.createPost);
router.delete("/delete/:postId", auth_1.isAuthenticatedUser, post_controller_1.postController.deletePost);
router.post("/upload-image", auth_1.isAuthenticatedUser, cloudinaryMulter_1.multerUpload.single("file"), post_controller_1.postController.uploadPostImage);
router.get("/get", auth_1.isAuthenticatedUserOptional, post_controller_1.postController.getAllPosts);
router.get("/get/:id", post_controller_1.postController.getPostById);
router.patch("/vote/:postId", auth_1.isAuthenticatedUser, post_controller_1.postController.votePost);
const postRoute = router;
exports.default = postRoute;
