const express = require("express");
const router = express.Router();
const ProductSchema = require("../models/ProductSchema");

router.get("/product", async (req, res) => {
  try {
    const response = await ProductSchema.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/product", async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = new ProductSchema({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    });
    newProduct.save();
    res.status(200).json({ message: "Product saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product
router.put("/product:id", async (req, res) => {
  const updatedProduct = await ProductSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
});

// Delete a product
router.delete("/product/:id", async (req, res) => {
  console.log("Deleting product with ID:", req.params.id);
  try {
    const deletedProduct = await ProductSchema.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
});

module.exports = router;
