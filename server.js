
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from 'morgan';
import connectDB from './config/DbConn.js';
import userRoutes from './routes/user.js';
import setupSwagger from './swagger.js';


const app = express();
dotenv.config();
// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/", userRoutes)
// Swagger
setupSwagger(app);

// Database connection
connectDB();

const PORT = process.env.PORT || 4000;

mongoose.connection.once("open", () => {
  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});

export default app;
