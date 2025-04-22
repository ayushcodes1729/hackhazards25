const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connectDb = require("./config/database");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,PUT,DELETE,PATCH",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));

const authRouter = require("./routes/auth");
const router = require("./routes/describe");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", router);
app.use("/", userRouter);

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
    (err) => {
        console.error("Error while connecting the database:", err)
    }
)
