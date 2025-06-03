import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prims = new PrismaClient();
const SECRET = "kontol3123131";

// Register
export const registerUser = async (req, res) => {
  const { email, password, nama, umur, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prims.user.create({
      data: {
        email,
        password: hashedPassword,
        nama,
        umur,
        role,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await prims.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid password" });
  }
  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token });
};
