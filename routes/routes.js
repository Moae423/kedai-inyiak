import express from "express";
import {
  createDataBarang,
  deleteDataBarang,
  getAllDataBarang,
  getSpesificBarang,
  updateDataBarang,
} from "../controller/barangController.js";
import {
  deleteUser,
  getUser,
  getUsersByRole,
  updateuser,
} from "../controller/userController.js";
import { barangValidator } from "../validators/barang.validator.js";

const router = express.Router();

// register
router.get("/barang", getAllDataBarang);
router.get("/barang/:id", getSpesificBarang);
router.post("/barang", barangValidator, createDataBarang);
router.put("/barang/:id", updateDataBarang);
router.delete("/barang/:id", deleteDataBarang);

// ROUTE USER
router.get("/user", getUser);
router.get("/user/by-role", getUsersByRole);
router.put("/user/:id", updateuser);
router.delete("/user/:id", deleteUser);
export default router;
