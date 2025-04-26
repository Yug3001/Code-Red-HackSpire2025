import React from 'react';

const BreathingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      {/* Breathing Animation */}
      <div className="w-64 h-64 flex items-center justify-center mb-6">
        {/* Simple breathing animation with CSS */}
        <div className="w-48 h-48 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
        Breathing Practice
      </h1>

      {/* Subtext */}
      <p className="text-lg text-blue-600 text-center max-w-md">
        A guided breathing exercise to help you manage stress and improve mindfulness. Focus on your breath and let go of tension.
      </p>
    </div>
  );
};

export default BreathingPage;
