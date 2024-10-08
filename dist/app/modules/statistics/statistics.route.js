"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//statics route..
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const statistics_controller_1 = require("./statistics.controller");
const router = (0, express_1.Router)();
router.get("/payment", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), statistics_controller_1.paymentStatisticsController);
router.get("/user", auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("admin"), statistics_controller_1.getUserStatistics);
const statisticsRoute = router;
exports.default = statisticsRoute;
