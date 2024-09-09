const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signUp = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered."
            });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPass,
        });

        return res.status(200).json({
            success: true,
            message: "User registered successfully."
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(403).json({
            success: false,
            message: "All fields are required, Please try again.",
        })
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, Please SignUp to continue.",
            });
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
            user.token = token;
            user.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            return res.cookie("token", token, options).status(200).json({
                success: true,
                message: "Logged in successfully",
                token,
                user
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect!",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}