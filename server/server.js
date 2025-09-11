import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();
const app = express();
mongoose.connect(`mongodb+srv://danishoodk_db_user:${process.env.DB_PASSWORD}@cluster0.snbtcha.mongodb.net/`)
  .then(() => console.log('Connected!'));
const corsOptions = {
  origin: ["https://ai-asistant-mern-stack-app-1.onrender.com"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.get("/api", (req, res) => {
  res.json({ data: ["apple", "mangos", "alls"] });
});

app.post("/registration", (req, res) => {
     User.create(req?.body).then(user => res.json(user)).catch(err => res.status(400).json(err));

});

app.post("/login", (req, res) => {
     const { email, password } = req.body;
     User.findOne({email: email}).then(user => {
      if (user?.password === password) {
         res.json("success");
      } else {
        return res.status(400).json("wrong password");
      }
     });
});

app.listen(8080, () => {
  console.log("server is runing on 8080");
});
