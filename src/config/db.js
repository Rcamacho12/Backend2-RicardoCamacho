import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("🟢 MongoDB conectado");
    } catch (error) {
        console.error("🔴 Error conectando a MongoDB:", error.message);
    }
};

export default connectDB;
