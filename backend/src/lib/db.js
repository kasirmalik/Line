import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB : ${conn.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error", error)
    }
}