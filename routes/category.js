const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");

// Get all categories
router.get("/", categoryController.getAllCategories);

// Create a new category
router.post("/", categoryController.createCategory);

// Get a category by ID
router.get("/:id", categoryController.getCategoryById);

// Update a category
router.put("/:id", categoryController.updateCategory);

// Delete a category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
