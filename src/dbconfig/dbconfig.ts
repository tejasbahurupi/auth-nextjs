import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URL;

if (!MONGO_URI) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

export async function connect() {
  try {
    //console.log(MONGO_URI);
    console.log("Connecting to MongoDB...");
    await mongoose.connect(`${MONGO_URI}` as any);

    console.log("MongoDB connected successfully");

    const connection = mongoose.connection;

    connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
