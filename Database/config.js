import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodb_url = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        if (!mongodb_url) {
            throw new Error("MongoDB URL not set in environment variables");
        }
        await mongoose.connect(mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectDB;
