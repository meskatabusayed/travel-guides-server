//cloud code start..
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CN_Cloud_name,
  api_key: process.env.CN_Api_key,
  api_secret: process.env.CN_Api_secret,
});
export default cloudinary;
////cloud code end