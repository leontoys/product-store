import mongoose from "mongoose";

//connect to mongodb
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.error("Error",error.message)
        process.exit(1)//1 - error, 0 - success
    }
}