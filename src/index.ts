import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

// Just Use MONGO_URI = Your MongoURI In .env but without '' String
const userMongoDBLink = process.env.MONGO_URI || process.env.MONGODB_URI;

// Caching MongoDB connection
let cachedConnection: mongoose.Connection | null = null;

async function connect2MongoDB(databaseName: string | undefined = undefined) {
    if (!userMongoDBLink) {
        console.error("MongoDB URI is not defined in environment variables.");
        return false;
    }

    const mongoDBUri = databaseName ? `${userMongoDBLink}${databaseName}` : userMongoDBLink;

    // If connection is already cached, return true
    if (cachedConnection) {
        console.log("Using cached MongoDB connection.");
        return true;
    }

    try {

        // Connection to MongoDB
        await mongoose.connect(mongoDBUri);

        // Caching the MongoDB connection
        cachedConnection = mongoose.connection;

        // Connecting with the cached connection
        cachedConnection.on("connected", () => {
            console.log("MongoDB connected successfully.");
        });

        cachedConnection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        return true;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return false;
    }
}

async function disconnect2MongoDB() {
    try {

        if (!cachedConnection) {
            console.log("No cached connection to disconnect.");
            return true;
        }

        await mongoose.disconnect();
        cachedConnection = null;
        console.log("Disconnected from MongoDB! 👋");

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export { connect2MongoDB, disconnect2MongoDB };