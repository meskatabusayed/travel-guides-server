"use strict";
//category route.......
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.get("/get", category_controller_1.categoryController.getCategories);
router.get("/get/:label", category_controller_1.categoryController.getCategoriesByName);
router.post("/create", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), category_controller_1.categoryController.createCategory);
router.delete("/delete/:id", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), category_controller_1.categoryController.deleteCategory);
const categoryRoute = router;
exports.default = categoryRoute;
