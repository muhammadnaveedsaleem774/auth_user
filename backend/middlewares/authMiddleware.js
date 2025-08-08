import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.js";

export const protect = (req, res, next) => {
  // 1. Get token from cookies (or Authorization header if preferred)
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
  // 2. If no token, deny access
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: "Not authorized - No token provided" 
    });
  }

  try {
    // 3. Verify token
    const decoded = verifyToken(token);
    
    // 4. Attach user data to request
    req.user = decoded;
    
    // 5. Continue to the next middleware/route
    next();
  } catch (err) {
    // Handle different JWT errors specifically
    let message = "Invalid token";
    if (err instanceof jwt.TokenExpiredError) {
      message = "Token expired";
    } else if (err instanceof jwt.JsonWebTokenError) {
      message = "Malformed token";
    }

    return res.status(401).json({ 
      success: false,
      message 
    });
  }
};