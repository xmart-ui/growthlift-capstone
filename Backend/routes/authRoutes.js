const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ todo: true });
});

router.post("/login", (req, res) => {
  res.json({ todo: true });
});

module.exports = router;