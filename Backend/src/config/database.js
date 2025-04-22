require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    await mongoose.connect(URI);
};

module.exports = connectDb;
