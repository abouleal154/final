const Expense = require("../models/expense");
const Budget = require("../models/budget");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ message: "Server error", error: error.message });
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    handleError(res, error);
  }
};

// Get all expenses for a specific user
exports.getExpenses = async (req, res) => {
  const userId = req.params.userId; // Fetching userId from URL parameters

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (error) {
    handleError(res, error);
  }
};

// Create new expense and update the related budget
exports.createExpense = async (req, res) => {
  try {
    const { userId, categoryId, amount, date, description } = req.body;

    // Validate input
    if (!userId || !categoryId || !amount || !date || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = new Expense(req.body);
    await expense.save();

    // Update the budget
    const budget = await Budget.findOne({ userId });
    if (budget) {
      budget.totalAmount -= amount;
      await budget.save();
    }

    res.status(201).json(expense);
  } catch (error) {
    handleError(res, error);
  }
};

// Get expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    // Check if expense exists
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    handleError(res, error);
  }
};

// Update expense
exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // Ensure validation rules are applied on update
    });

    // Check if expense exists
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    handleError(res, error);
  }
};

// Delete expense and update the related budget
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    // Check if expense exists
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Restore the amount to the user's budget
    const budget = await Budget.findOne({ userId: expense.userId });
    if (budget) {
      budget.totalAmount += expense.amount;
      await budget.save();
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
