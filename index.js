// importing necessary components
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import mntrRouter from "./Routers/mntrRouter.js";
import stdRouter from "./Routers/stdRouter.js";

// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mentor", mntrRouter);
app.use("/api/student", stdRouter);
connectDB();

// setting port
const port = 4000 || process.env.PORT ;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
