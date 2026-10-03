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

// config/connectDB.js
// import mongoose from "mongoose";

// let cached = global.mongoose;
// if (!cached) cached = global.mongoose = { conn: null, promise: null };

// export default async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(process.env.MONGODB_URI, {
//       serverSelectionTimeoutMS: 10000,
//       bufferCommands: false,  // fail fast instead of buffering
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (err) {
//     cached.promise = null;
//     throw err;
//   }
//   return cached.conn;
// }