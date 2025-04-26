const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moodRoutes = require('./routes/mood');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/mood', moodRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mindmosaic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
