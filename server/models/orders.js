const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    email: String
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;