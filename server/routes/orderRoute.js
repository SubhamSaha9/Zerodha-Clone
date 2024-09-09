const express = require("express");
const { createOrder, getOrders } = require("../controllers/order");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/new-order", auth, createOrder);
router.post("/get-orders", auth, getOrders);

module.exports = router;