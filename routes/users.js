const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

// GET all users
router.get("/", userController.getAllUsers);

// POST create new user
router.post("/", userController.createNewUser);

// GET user by ID
router.get("/:id", userController.getUserById);

// PUT update user by ID
router.put("/:id", userController.updateUser);

// DELETE user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
