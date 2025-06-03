import express from "express";
import {
  createDataBarang,
  deleteDataBarang,
  getAllDataBarang,
  getSpesificBarang,
  updateDataBarang,
} from "../controller/auth/kadaicontroller.js";

const router = express.Router();

// register
router.get("/barang", getAllDataBarang);
router.get("/barang/:id", getSpesificBarang);
router.post("/barang", createDataBarang);
router.put("/barang/:id", updateDataBarang);
router.delete("/barang/:id", deleteDataBarang);
export default router;
