const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

// GET all users
router.get("/users", userController.getAllUsers);

// POST create new user
router.post("/users", userController.createNewUser);

// GET user by ID
router.get("/users/:id", userController.getUserById);

// PUT update user by ID
router.put("/users/:id", userController.updateUser);

// DELETE user by ID
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
