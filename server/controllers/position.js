const Position = require("../models/positions")

exports.addPosition = async (req, res) => {
    let tempPositions = [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
        },
    ];

    try {
        tempPositions.forEach(async (item) => {
            let newPosition = await Position.create({
                product: item.product,
                name: item.name,
                qty: item.qty,
                avg: item.avg,
                price: item.price,
                net: item.net,
                day: item.day,
                isLoss: item.isLoss,
            });
        });

        res.status(200).json({
            success: true,
            message: "data added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getPosition = async (req, res) => {
    try {
        const positions = await Position.find({});
        return res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: positions,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}