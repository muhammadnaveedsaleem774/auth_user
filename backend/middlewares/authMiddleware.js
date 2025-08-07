// Example of a middleware that could be used for protected routes
export const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized'
    });
  }
  next();
};