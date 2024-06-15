const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expense");

// GET all expenses
router.get("/expenses", expenseController.getAllExpenses);
// GET all expenses for a specific user
router.get("/expenses", expenseController.getExpenses);

// POST create new expense
router.post("/expenses", expenseController.createExpense);

// GET expense by ID
router.get("/expenses/:id", expenseController.getExpenseById);

// PUT update expense by ID
router.put("/expenses/:id", expenseController.updateExpense);

// DELETE expense by ID
router.delete("/expenses/:id", expenseController.deleteExpense);

module.exports = router;
