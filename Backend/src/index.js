const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connectDb = require("./config/database");

app.get("/", (req, res) => {
    console.log("Server started");
    res.send("Server Running");
});

connectDb().then(() => {
    console.log("Database connection successfull");
    app.listen(port, () => {
        console.log(`Server started listening to ${port}...`);
    });
}).catch(
    (err)=>{
        console.error("Error while connecting the database")
    }
)
