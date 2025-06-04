import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prims = new PrismaClient();

// Register
export const registerUser = async (req, res) => {
  const { email, password, nama, umur, role } = req.body;
  // Hasing Password
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prims.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }
    // Buat akun baru
    const user = await prims.user.create({
      data: {
        email,
        password: hashedPassword,
        nama,
        umur,
        role,
      },
    });
    res.json({
      message: "Akun berhasil dibuat",
      user: {
        id: user.id,
        email: user.email,
        nama: user.nama,
        umur: user.umur,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Logic login
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required", success: false });
    }
    // cari user di database
    const user = await prims.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Email Atau Password salah" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Email atau Password salah" });
    }
    // Generate Token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        nama: user.nama,
        umur: user.umur,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.json({ message: "Login Berhasil", token });
  } catch (error) {
    console.log(`Login Error: ${error.message}`);
    res.status(500).json({ message: "Server error", success: false });
  }
};
