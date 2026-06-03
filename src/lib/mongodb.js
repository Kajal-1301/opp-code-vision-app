import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

async function connectDB() {

  console.log("MONGODB_URI:", process.env.MONGODB_URI); // add this

  if (cached.conn) {
    return cached.conn;
  }

  cached.promise = mongoose.connect(MONGODB_URI);
  cached.conn = await cached.promise;

  console.log("MongoDB Connected ✅");
  return cached.conn;
}

export default connectDB;  