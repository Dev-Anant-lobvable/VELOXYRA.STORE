import express from "express";
import cors from "cors";

const app = express();
app.use(cors());           // Allow frontend requests
app.use(express.json());    // Parse JSON body

// Test route
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

// Add to cart route
app.post("/add-to-cart", (req, res) => {
  const { product } = req.body;
  console.log("Product received:", product);   // Logs in Render logs
  res.json({ message: `${product} added to cart!` });
});

// Listen on Render assigned port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
