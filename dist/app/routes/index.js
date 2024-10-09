"use strict";
/* import { Router } from "express";
import { UserRoutes } from "../Module/User/user.route";
import { ServiceRoute } from "../Module/Service/service.route";
import { SlotRoutes } from "../Module/Slot/slot.route";
import { BookingRoutes } from "../Module/Booking/booking.route";
import { AuthRoutes } from "../Module/Auth/auth.route";
import { PaymentRoutes } from "../Module/Payment/payment.route";
import { ReviwRoute } from "../Module/Reviw/reviw.route";


const router = Router();

const moduleRoutes = [
  {
    path: "",
    route: UserRoutes,
  },
  {
    path: "",
    route : ServiceRoute
  },
  {
    path: "",
    route: SlotRoutes
  },
  {
    path: "",
    route: BookingRoutes
  },
  {
    path: "",
    route: AuthRoutes
  },
  {
    path: "",
    route: PaymentRoutes
  },
  {
    path: "",
    route: ReviwRoute
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router; */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("../modules/auth/auth.route"));
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const post_route_1 = __importDefault(require("../modules/post/post.route"));
const category_route_1 = __importDefault(require("../modules/category/category.route"));
const payment_route_1 = __importDefault(require("../modules/payment/payment.route"));
const comment_route_1 = __importDefault(require("../modules/comments/comment.route"));
const follower_route_1 = __importDefault(require("../modules/follower/follower.route"));
const statistics_route_1 = __importDefault(require("../modules/statistics/statistics.route"));
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/auth",
        route: auth_route_1.default,
    },
    {
        path: "/payment",
        route: payment_route_1.default,
    },
    {
        path: "/user",
        route: user_route_1.default,
    },
    {
        path: "/post",
        route: post_route_1.default,
    },
    {
        path: "/category",
        route: category_route_1.default,
    },
    {
        path: "/comment",
        route: comment_route_1.default,
    },
    {
        path: "/follower",
        route: follower_route_1.default,
    },
    {
        path: "/statistics",
        route: statistics_route_1.default,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
