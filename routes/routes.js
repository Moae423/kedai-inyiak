import express from "express";
import {
  createDataBarang,
  deleteDataBarang,
  deleteUser,
  getAllDataBarang,
  getSpesificBarang,
  getUser,
  getUsersByRole,
  updateDataBarang,
  updateuser,
} from "../controller/kadaicontroller.js";

const router = express.Router();

// register
router.get("/barang", getAllDataBarang);
router.get("/barang/:id", getSpesificBarang);
router.post("/barang", createDataBarang);
router.put("/barang/:id", updateDataBarang);
router.delete("/barang/:id", deleteDataBarang);

// ROUTE USER
router.get("/user", getUser);
router.get("/user/by-role", getUsersByRole);
router.put("/user/:id", updateuser);
router.delete("/user/:id", deleteUser);
export default router;
