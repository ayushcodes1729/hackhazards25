require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

async function connectDb() {
    await mongoose.connect(URI);
}

module.exports = connectDb;
