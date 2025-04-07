import express from "express"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import dbConnect from "./library/dbConnect.lib.js"

const app= express();
dotenv.config();

app.use("/api/auth", authRoutes);

const PORT= process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Server is listening...");
    dbConnect();
});