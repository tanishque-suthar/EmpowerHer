import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    // console.log(connectionInstance);
    console.log(`\nConnected to MongoDB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);           
  }
};

export default connectDB;
