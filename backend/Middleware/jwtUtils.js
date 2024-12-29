const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET,
    { expiresIn: '1d' }
  );
};
