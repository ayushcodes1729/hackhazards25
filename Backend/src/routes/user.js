const express = require("express");
const { userAuth } = require("../middleware/auth");
const userRouter = express.Router();
userRouter.get("/get/user",userAuth, async (req,res)=>{
    try {
        const loggedInUser = req.user;
        res.json({
            message: "LoggedIn user",
            user: loggedInUser
        })
    } catch (error) {
        console.log(error);
        res.status(401).send("Üser not found")
    }
})

module.exports = userRouter;