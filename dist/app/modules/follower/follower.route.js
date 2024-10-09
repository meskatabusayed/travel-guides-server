"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//follower route...
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const follower_controller_1 = require("./follower.controller");
const router = (0, express_1.Router)();
router.get("/get", auth_1.isAuthenticatedUser, follower_controller_1.followerController.getFollwers);
router.get("/get/following", auth_1.isAuthenticatedUser, follower_controller_1.followerController.getFollwing);
router.post("/create", auth_1.isAuthenticatedUser, follower_controller_1.followerController.createFollowerConstroller);
router.put("/delete", auth_1.isAuthenticatedUser, follower_controller_1.followerController.deleteFollowerController);
const followerRoute = router;
exports.default = followerRoute;
