import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "productDB",
    };
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("Connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
