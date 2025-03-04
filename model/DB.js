import mongoose from "mongoose";
import AsyncHandler from "express-async-handler";

const connectDB = AsyncHandler(async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connection Successful");
   } catch (error) {
      console.log(error);
   }
});

export default connectDB;
