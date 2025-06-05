import "dotenv/config";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth/auth.js";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL lu
    credentials: true, // Harus ada ini kalau withCredentials: true
  })
);
app.use("/api/auth", authRoutes);
app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Server running di ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});
