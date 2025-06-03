import express from "express";
import {
  loginUser,
  registerUser,
} from "../../controller/auth/authController.js";

const router = express.Router();

// register
router.post("/register", registerUser);

// login
router.post("/login", loginUser);

export default router;
