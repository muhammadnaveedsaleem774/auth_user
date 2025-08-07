import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import sessionConfig from './config/session.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(sessionConfig);

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});