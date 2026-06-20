import mongoose from 'mongoose'

const connectDB = async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/taskflow`)
       console.log("MongoDB connected")
    } catch(error) {
        console.error("MongoDB connection error:", error.message)
        process.exit(1) // stop the server immediately
    }
}

export default connectDB