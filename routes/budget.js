const express = require("express");
const router = express.Router();
const budgetController = require("../controller/budget");

// Get all budgets
router.get("/", budgetController.getAllBudgets);

// Create a new budget
router.post("/", budgetController.createBudget);

// Get a budget by ID
router.get("/:id", budgetController.getBudgetById);

// Get a budget by userID
router.get("/:id", budgetController.getBudgetsByUserId);

// Update a budget
router.put("/:id", budgetController.updateBudget);

// Delete a budget
router.delete("/:id", budgetController.deleteBudget);

module.exports = router;
