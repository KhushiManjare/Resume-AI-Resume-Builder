// import express from "express"; // Import the Express framework for building the server.
// import cors from "cors"; // Middleware for enabling Cross-Origin Resource Sharing.
// // Load environment variables from the .env file into process.env (CRITICAL).
// import "dotenv/config";
// import connectDB from "./configs/db.js"; // Import the MongoDB connection function.
// // Import route handlers for different resource domains.
// import userRouter from "./routes/userRoutes.js";
// import resumeRouter from "./routes/resumeRoutes.js";
// import aiRouter from "./routes/aiRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// try {
//   await connectDB();
// } catch (error) {
//   console.error("Server failed to start due to database connection error.");
// }

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send(`<div>
//     <h1>DEFAULT ROUTE</h1>  
//     <p>Resume Builder AI is Live Everything is running OK 🚀</p>
//     <p>Made By Khushi Manjare</p>
//     </div>`);
// });

// app.use("/api/users", userRouter);
// app.use("/api/resumes", resumeRouter);
// app.use("/api/ai", aiRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on Port ${PORT}`);
// });
import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

// 🔹 MIDDLEWARES
app.use(express.json());
app.use(cors());

// 🔹 DATABASE CONNECT (safe for Vercel)
connectDB()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err.message);
  });

// 🔹 TEST ROUTE
app.get("/", (req, res) => {
  res.send(`
    <div>
      <h1>Resume Builder AI 🚀</h1>
      <p>Backend is running successfully</p>
      <p>Made by Khushi Manjare</p>
    </div>
  `);
});

// 🔹 API ROUTES
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

// ❌ DO NOT use app.listen on Vercel
// app.listen(PORT)

// ✅ REQUIRED FOR VERCEL
export default app;
