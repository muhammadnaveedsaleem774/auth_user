import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:5173"];
app.use(cors({
  origin: ['http://localhost:5173'], // Add your frontend URL
  credentials: true,
  exposedHeaders: ['set-cookie']
}));
// Security & Parsing Middleware
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Rate Limiting (100 requests per 15 mins for auth routes)
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use("/api/auth", limiter);

// Routes
app.use("/api/auth", authRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('JWT Secret:', process.env.JWT_SECRET);