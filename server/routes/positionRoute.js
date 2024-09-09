const express = require("express");
const { addPosition, getPosition } = require("../controllers/position");
const router = express.Router();

// router.get("/add-positions", addPosition);
router.get("/all-positions", getPosition);

module.exports = router;