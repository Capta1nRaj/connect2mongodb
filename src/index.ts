import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

// Just Use MONGO_URI = Your MongoURI In .env but without '' String
const userMongoDBLink = process.env.MONGO_URI || process.env.MONGODB_URI;

async function connect2MongoDB(databaseName: string | undefined = undefined) {
    if (!userMongoDBLink) {
        console.error("MongoDB URI is not defined in environment variables.");
        return false;
    }

    const mongoDBUri = databaseName ? `${userMongoDBLink}${databaseName}` : userMongoDBLink;

    try {
        await mongoose.connect(mongoDBUri);
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully to", mongoDBUri);
        });
        mongoose.connection.on("error", (err) => {
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
        await mongoose.disconnect();
        return true;
        // return console.log("Disconnected from MongoDB! 👋");
    } catch (error) {
        console.log(error);
        return false;
    }
}

export { connect2MongoDB, disconnect2MongoDB };