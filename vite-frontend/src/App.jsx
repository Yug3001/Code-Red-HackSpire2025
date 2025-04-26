import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignUpPage from '../components/SignUpPage';
import DashboardPage from '../components/DashboardPage';
import MusicPage from '../components/MusicPage';
import SleepStoriesPage from '../components/SleepStoriesPage';
import MeditationPage from '../components/MeditationPage';
import BreathingPage from '../components/BreathingPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="p-4 animate-fadeIn">
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/sleepstories" element={<SleepStoriesPage />} />
            <Route path="/meditation" element={<MeditationPage />} />
            <Route path="/breathing" element={<BreathingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
