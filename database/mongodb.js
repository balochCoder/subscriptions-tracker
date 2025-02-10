import mongoose from "mongoose";

import {DB_URI, NODE_ENV} from '../config/env.js'

if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<development/production>.local');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database: ${NODE_ENV} mode`);
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

export default connectToDatabase;