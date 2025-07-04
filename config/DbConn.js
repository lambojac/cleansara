import mongoose from "mongoose";
// Set the strictQuery option
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      
    });
    console.log(`Database Running!!! ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
