const express = require("express");
const { addHoldings, getHoldings } = require("../controllers/holding");
const router = express.Router();

// router.get("/add-holdings", addHoldings);
router.get("/all-holdings", getHoldings);

module.exports = router;