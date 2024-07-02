const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Budget", budgetSchema);
