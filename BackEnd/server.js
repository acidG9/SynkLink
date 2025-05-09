import express from "express"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
import notificationRoutes from "./routes/notification.routes.js"
import dotenv from "dotenv"
import dbConnect from "./library/dbConnect.lib.js"
import cookieParser from "cookie-parser"
import { v2 as cloudinary } from "cloudinary"

const app= express();
dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

const PORT= process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Server is listening...");
    dbConnect();
});