const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/users");

const jwtSecret = process.env.JWT_SECRET;

const userAuth = async (req, res, next) =>{
    try {
        const {token} = req.cookies;
        if (!token){
            res.status(401).send("Unauthorized");
        }

        const verifyUser = await jwt.verify(token, jwtSecret)
        const {_id} = verifyUser;

        const user = await User.findById(_id);
        if(!user){
            res.status(404).send("User doesn't exists");
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send("Error:"+ error.message)
    }
}

module.exports = {
    userAuth
}