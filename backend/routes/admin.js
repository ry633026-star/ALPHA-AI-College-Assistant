const express = require("express");
const router = express.Router();
const User = require("../models/User");

const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({}, "name email role");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
