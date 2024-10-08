"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//comment route...
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const comment_controller_1 = require("./comment.controller");
const router = (0, express_1.Router)();
router.post("/create/:id", auth_1.isAuthenticatedUser, comment_controller_1.commentController.createComment);
router.get("/get/:id", comment_controller_1.commentController.getCommentsByPostId);
router.put("/update/:id", auth_1.isAuthenticatedUser, comment_controller_1.commentController.updateComment);
router.delete("/delete/:id", auth_1.isAuthenticatedUser, comment_controller_1.commentController.deleteComment);
const commentRoute = router;
exports.default = commentRoute;
