const mongoose = require("mongoose");
require("dotenv").config();
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const jwtSecret = process.env.JWT_SECRET;

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 254,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid Email Id: ${value}`);
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error(
                    "Your password should include a capital letter, a number and a special character."
                );
            }
        },
    },
});

userSchema.methods.getJWT = async function() {
    const user = this;
    const token = await jwt.sign({ _id: user._id }, jwtSecret, {
        expiresIn: "7d",
    });
    return token;
};

userSchema.methods.validatePassword = async function(passwordInput){
    const user = this;
    const authenticatePass = await bcrypt.compare(passwordInput, user.password);
    return authenticatePass;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
