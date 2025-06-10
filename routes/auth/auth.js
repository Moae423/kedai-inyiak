import express from "express";
import {
  getCurrentUser,
  loginUser,
  registerUser,
} from "../../controller/auth/authController.js";
import { authenticationToken } from "../../middleware/auth.js";
import { userValidator } from "../../validators/user.validator.js";

const router = express.Router();

//
router.post("/register", userValidator, registerUser);
router.post("/login", loginUser);
router.get("/me", authenticationToken, getCurrentUser); // endpoint baru
export default router;
