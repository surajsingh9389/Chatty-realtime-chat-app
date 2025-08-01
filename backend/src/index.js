import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is up and running!");
});

// if(process.env.NODE_ENV==="production"){
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get(/(.*)/, (req, res) =>{
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   })
// }

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDB();
});
