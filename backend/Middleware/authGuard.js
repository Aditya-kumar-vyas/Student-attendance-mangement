const jwt = require('jsonwebtoken');

const authGuard = (role) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token);
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const user = jwt.verify(token,process.env.Secret);
    if (role && user.role !== role) return res.status(403).json({ message: 'Access denied' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authGuard;
