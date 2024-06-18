const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expense");

// GET all expenses
router.get("/", expenseController.getAllExpenses);
// GET all expenses for a specific user
router.get("/:userId", expenseController.getExpenses);

// POST create new expense
router.post("/", expenseController.createExpense);

// GET expense by ID
router.get("/:id", expenseController.getExpenseById);

// PUT update expense by ID
router.put("/:id", expenseController.updateExpense);

// DELETE expense by ID
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
