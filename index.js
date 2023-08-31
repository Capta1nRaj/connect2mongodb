const mongoose = require('mongoose');
require("dotenv").config();

// Just Use MONGO_URI = Your MongoURI In .env but without '' String
const userMongoDBLink = process.env.MONGO_URI || process.env.MONGODB_URI;

async function connect2MongoDB(databaseName) {

    // If/Else Is Used To Check Whether Database Name Is Defined Or Not
    if (databaseName === undefined) {
        try {
            const MongoDBUrlWithDB = userMongoDBLink;
            // Connecting To The MogoDB
            await mongoose.connect(MongoDBUrlWithDB);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    } else if (databaseName !== undefined) {
        try {
            const MongoDBUrlWithDB = userMongoDBLink + databaseName;
            // Connecting To The MogoDB
            await mongoose.connect(MongoDBUrlWithDB);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

async function disconnect2MongoDB() {
    try {
        await mongoose.disconnect();
        return true;
        // return console.log("Disconnected from MongoDB! 👋");
    } catch (error) {
        return error;
    }
}

module.exports = { connect2MongoDB, disconnect2MongoDB };