import "dotenv/config";
import cors from "cors";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`LISTENING PORT:${PORT}`);
});
