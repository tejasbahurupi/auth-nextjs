import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
      process.exit();
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
