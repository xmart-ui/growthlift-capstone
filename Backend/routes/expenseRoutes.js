const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ todo: true });
});

router.post("/", (req, res) => {
  res.json({ todo: true });
});

router.put("/:id", (req, res) => {
  res.json({ todo: true });
});


router.delete("/:id", (req, res) => {
  res.json({ todo: true });
});

module.exports = router;