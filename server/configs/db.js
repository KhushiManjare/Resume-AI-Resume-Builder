import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected Successfully!");
    });

    const mongodbURI = process.env.MONGODB_URI;

    if (!mongodbURI) {
      console.error("MONGODB_URI environment variable not set.");
      process.exit(1);
    }

    await mongoose.connect(mongodbURI);
  } catch (error) {
    console.error(
      "Connection Failed!, Error while connecting to MongoDB:",
      error.message || error
    );
    process.exit(1);
  }
};

export default connectDB;
