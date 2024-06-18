// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance
    };

    const client = new MongoClient(url);
    try {
        // Task 1: Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to server");
        // Task 2: Connect to database giftDB and store in variable dbInstance
        const dbInstance = client.db(dbName);
        // Task 3: Return database instance
        return dbInstance;
    }
    catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

module.exports = connectToDatabase;