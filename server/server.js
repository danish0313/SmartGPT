import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
mongoose.connect(`mongodb+srv://danishoodk_db_user:${process.env.DB_PASSWORD}@cluster0.snbtcha.mongodb.net/?appName=Cluster0`)
  .then(() => console.log('Connected!'));

const corsOptions = {
  origin: ["http://localhost:5173"],
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/api/user", userRoutes);


app.listen(8080, () => {
  console.log("server is runing on 8080");
});
