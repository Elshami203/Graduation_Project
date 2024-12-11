const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/Admin');
const { connectDB } = require('../../config/database');

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
  connectDB()
};
