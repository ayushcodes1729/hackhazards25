const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");
const validateSignupData = require("../utils/validation");
const validate = require("validator");

authRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        validateSignupData(req);
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            throw new Error("User already exists");
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await new User({
            name,
            email,
            password: passwordHash,
        });

        const savedUser = await newUser.save();
        const token = await savedUser.getJWT();

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        res.json({
            data: savedUser,
            message: "User SingedUp successfully",
        });
    } catch (error) {
        res.status(400).send("Error while signin up: " + error.message);
    }
});

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const registeredUser = await User.findOne({ email });
        if (!registeredUser) {
            res.status(404).send("User not found");
        }
        if (!validate.isEmail(email)) {
            throw new Error("Please enter a valid email");
        }

        const authenticatePass = await registeredUser.validatePassword(password);

        if (!authenticatePass) {
            res.status(401).send("Invalid Credentials");
        } else {
            const token = await registeredUser.getJWT();
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            });
            res.json({
                message: "User logged in",
                registeredUser,
            });
        }
    } catch (error) {
        res.status(400).send("Error while Logging in: " + error.message);
    }
});

authRouter.post("/logout", async (req, res) => {
    try {
        res
            .cookie("token", null, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            })
            .send("User Logged Out successfully");
    } catch (error) {
        res.status(400).send("Can't log out");
    }
});

module.exports = authRouter;
