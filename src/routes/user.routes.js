import express from "express"
const router = express.Router();
import {registerUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
try {
    router.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  registerUser
);
} catch (error) {
    console.log("Failed to load user controller",error.message);
}

export default router;