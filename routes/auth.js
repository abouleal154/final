const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

// POST register a new user
router.post("/register", authController.registerUser);

// POST login a user
router.post("/login", authController.loginUser);

module.exports = router;
