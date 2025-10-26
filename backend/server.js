import express from "express";
import cors from "cors";

const app = express();

// Allow all origins (for testing)
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend is live!"));

app.post("/add-to-cart", (req, res) => {
  const { product } = req.body;
  res.json({ message: `${product} added to cart!` });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
