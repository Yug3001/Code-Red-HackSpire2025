const express = require('express');
const router = express.Router();

// Mock NLP and mood classification function
function analyzeMood(responses) {
  // Simple keyword-based mood detection for demonstration
  const text = responses.join(' ').toLowerCase();
  let mood = 'neutral';

  if (text.includes('happy') || text.includes('good') || text.includes('great')) {
    mood = 'happy';
  } else if (text.includes('sad') || text.includes('depressed')) {
    mood = 'sad';
  } else if (text.includes('anxious') || text.includes('nervous') || text.includes('worried')) {
    mood = 'anxious';
  } else if (text.includes('calm') || text.includes('relaxed')) {
    mood = 'calm';
  } else if (text.includes('stressed') || text.includes('stress')) {
    mood = 'stressed';
  }

  // Mock recommendations based on mood
  const recommendations = {
    happy: {
      music: ['Happy by Pharrell Williams', 'Walking on Sunshine by Katrina & The Waves'],
      movies: ['The Pursuit of Happyness', 'La La Land'],
      books: ['The Happiness Project', 'The Art of Happiness'],
      activities: ['Go for a walk', 'Call a friend'],
    },
    sad: {
      music: ['Someone Like You by Adele', 'Fix You by Coldplay'],
      movies: ['Inside Out', 'The Fault in Our Stars'],
      books: ['The Bell Jar', 'Reasons to Stay Alive'],
      activities: ['Write in a journal', 'Practice mindfulness'],
    },
    anxious: {
      music: ['Weightless by Marconi Union', 'Clair de Lune by Debussy'],
      movies: ['Finding Nemo', 'Up'],
      books: ['The Anxiety and Phobia Workbook', 'Dare'],
      activities: ['Deep breathing exercises', 'Yoga'],
    },
    calm: {
      music: ['Watermark by Enya', 'Electra by Airstream'],
      movies: ['My Neighbor Totoro', 'Amélie'],
      books: ['The Power of Now', 'Wherever You Go, There You Are'],
      activities: ['Meditation', 'Nature walk'],
    },
    stressed: {
      music: ['Breathe Me by Sia', 'Let It Be by The Beatles'],
      movies: ['Eat Pray Love', 'The Secret Life of Walter Mitty'],
      books: ['Burnout', 'The Relaxation Response'],
      activities: ['Progressive muscle relaxation', 'Take a break'],
    },
    neutral: {
      music: ['Shape of You by Ed Sheeran', 'Counting Stars by OneRepublic'],
      movies: ['Forrest Gump', 'The Shawshank Redemption'],
      books: ['Atomic Habits', 'Thinking, Fast and Slow'],
      activities: ['Read a book', 'Try a new hobby'],
    },
  };

  return { mood, recommendations: recommendations[mood] || recommendations['neutral'] };
}

router.post('/analyze', (req, res) => {
  const { responses } = req.body;
  if (!responses || !Array.isArray(responses)) {
    return res.status(400).json({ error: 'Invalid input, expected an array of responses.' });
  }

  const analysis = analyzeMood(responses);
  res.json(analysis);
});

module.exports = router;
