const config = require('config');
const express = require('express');
const bcrypt = require('bcryptjs');
const { COMMON_ERROR_MESSAGE } = require('../data/constants');

const { User } = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json('User already exists');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    user = await user.save();
    const token = user.generateAuthToken();
    return res.json(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json('User Not Found');
  }
  const passwordsMatched = await bcrypt.compare(password, user.password);
  if (!passwordsMatched) {
    return res.status(400).json('Invalid Username/Password');
  }
  const token = user.generateAuthToken();
  res.json(token);
});

module.exports = router;
