// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("TorqueWave backend is live!");
});

// Add to cart route
app.post("/add-to-cart", (req, res) => {
  const { product } = req.body;
  res.json({ message: `${product} added to cart!` });
});

// Use Render assigned port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});