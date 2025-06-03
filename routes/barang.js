import express from "express";
import {
  createDataBarang,
  getAllDataBarang,
  getSpesificBarang,
} from "../controller/auth/kadaicontroller.js";

const router = express.Router();

// register
router.get("/barang", getAllDataBarang);
router.get("/barang/:id", getSpesificBarang);
router.post("/barang", createDataBarang);
export default router;
