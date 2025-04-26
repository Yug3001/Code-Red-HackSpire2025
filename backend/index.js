const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const axios = require('axios');
const moodRouter = require('./routes/mood');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/calm-clone', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.send("User created!");
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.use('/api/mood', moodRouter);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
