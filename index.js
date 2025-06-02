import "dotenv/config";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running di ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});
