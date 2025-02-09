import mongoose from 'mongoose';
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env<development/production>.local");
}

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
    } catch (error){
        console.error('Error connecting to DB', error);
        process.exit(1);
    }
}

export default connectToDB;
