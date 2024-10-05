"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//cloud code start..
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CN_Cloud_name,
    api_key: process.env.CN_Api_key,
    api_secret: process.env.CN_Api_secret,
});
exports.default = cloudinary_1.v2;
////cloud code end
