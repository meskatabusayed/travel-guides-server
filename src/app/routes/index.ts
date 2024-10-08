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


import express from 'express'
import authRoute from "../modules/auth/auth.route";
import userRoute from "../modules/user/user.route";
import postRoute from '../modules/post/post.route';
import categoryRoute from '../modules/category/category.route';
import paymentRoute from '../modules/payment/payment.route';
import commentRoute from '../modules/comments/comment.route';
import followerRoute from '../modules/follower/follower.route';
import statisticsRoute from '../modules/statistics/statistics.route';

const router = express.Router();

const moduleRoute = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/post",
    route: postRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/comment",
    route: commentRoute,
  },
  {
    path: "/follower",
    route: followerRoute,
  },
  {
    path: "/statistics",
    route: statisticsRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;