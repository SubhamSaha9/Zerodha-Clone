const Order = require("../models/orders");
exports.createOrder = async (req, res) => {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
        return res.status(401).json({
            success: false,
            message: "all fields are required",
        });
    }

    try {

        let newOrder = await Order.create({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            email: req.user.email
        });

        res.status(200).json({
            success: true,
            message: "order created",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getOrders = async (req, res) => {
    const email = req.user.email;
    if (!email) {
        return res.status(401).json({
            success: false,
            message: "all fields are required",
        });
    }

    try {
        const orders = await Order.find({ email: email });
        if (orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "no orders found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "orders fetched successfully",
            data: orders
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}