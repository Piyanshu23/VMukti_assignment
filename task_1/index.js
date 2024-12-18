// Import required modules
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory array to store products
let products = [
  // Example product
  { id: "1", name: "Laptop", price: 80000, category: "Electronics" },
  { id: "2", name: "Keyboard", price: 2000, category: "Electronics" },
  { id: "3", name: "Pen", price: 10, category: "Stationary" },
  { id: "4", name: "Face Wash", price: 700, category: "Beauty" },
];

// GET /products - Retrieve all products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// POST /products - Add a new product
app.post("/products", (req, res) => {
  const { id, name, price, category } = req.body;

  // Basic error handling
  if (!id || !name || !price || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Add new product to the in-memory array
  const newProduct = { id, name, price, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE /products/:id - Delete a product by ID
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = products.length;

  // Filter out the product with the given ID
  products = products.filter((product) => product.id !== id);

  // Check if any product was deleted
  if (products.length === initialLength) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json({ message: "Product deleted successfully" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
