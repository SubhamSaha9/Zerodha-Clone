require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const { connect } = require("./config/database");

const holdingRoute = require("./routes/holdingRoute");
const positionRoute = require("./routes/positionRoute");
const orderRoute = require("./routes/orderRoute");
const authRoute = require("./routes/authRoute");

connect();
app.use(cors({
    origin: "http://localhost:3458",
    credentials: true
}));
app.use(bodyParser.json());

app.use("/api/v1", holdingRoute);
app.use("/api/v1", positionRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", authRoute);

app.get("/", (req, res) => {
    return res.json({ message: "hello" });
})

app.listen(PORT, () => {
    console.log(`app is listening to port ${PORT}`);
})