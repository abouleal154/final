const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const expenseRoute = require("./routes/expense");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const budgetRoute = require("./routes/budget");
const categoryRoute = require("./routes/category");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/expense", expenseRoute);
app.use("/auth", authRoute);
app.use("/budget", budgetRoute);
app.use("/users", usersRoute);
app.use("/category", categoryRoute);

//connect to mongodb

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "expense",
  })
  .then((res) => app.listen(8080))
  .catch((err) => console.log(err));
