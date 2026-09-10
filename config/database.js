import mongoose from "mongoose";

let connected = false;

const connectDB =async () => {
    mongoose.set('strictQuery', true)

    // If databse is already  connected donot connect it again
    if(connected){
        console.log("MongoDB already connected ")
        return;
    }

    // Connect Mongo DB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("MongoDB Connection Error: ",error)
    }

}

export default connectDB;