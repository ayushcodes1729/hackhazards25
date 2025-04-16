const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connectDb = require("./config/database");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const router = require("./routes/describe");

app.use("/", authRouter);
app.use("/", router);

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
        console.error("Error while connecting the database:", err)
    }
)
