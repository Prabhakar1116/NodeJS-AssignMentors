// importing necessary components
import mongoose from "mongoose";
import dotnev from "dotenv";


// ,iddleware
dotnev.config();

// connecting to database
const mongodb_url = process.env.MONGODB_URL

const connectDB = async()=>{
    try{
        const connection= await mongoose.connect(mongodb_url);
            console.log("MongoDB Connected...")
            }
            catch(error){
                console.log(error.message);
                res.status(500).json({message:"MongoDB connection Error"})
            }
}

export default connectDB