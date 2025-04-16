require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

async function connectDb() {
    try {
        await mongoose.connect();
        console.log("Connected to MongoDB");
    } catch (error) { "Error while connecting the database", error};
    }


module.exports = connectDb;
