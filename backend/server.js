import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import ProductRoutes from "./routes/product.route.js";
import ReadmeRoutes from "./routes/readme.route.js";

dotenv.config();

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/products", ProductRoutes);
app.use("/api/readme", ReadmeRoutes);

if (process.env.NODE_ENV !== "production") {
  app.get("/", (req, res) => res.send("Server is ready!"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

// Start the server immediately; DB connection failure only disables product routes
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("DB connection failed (README API still available):", err.message);
  });
