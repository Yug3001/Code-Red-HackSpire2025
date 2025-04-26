import React from 'react';

const MeditationPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
        Meditation Practice
      </h1>
      <p className="text-lg text-green-700 mb-8 text-center max-w-2xl">
        Learn meditation techniques to calm your mind, improve focus, and find inner peace. Start with simple breathing, guided sessions, and mindful exercises.
      </p>

      {/* Video Section */}
      <div className="w-full max-w-3xl mb-8">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/inpok4MKVLM" 
            title="Guided Meditation Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <img className="rounded-lg shadow-md" src="https://source.unsplash.com/300x200/?meditation,nature" alt="Meditation Nature" />
        <img className="rounded-lg shadow-md" src="https://source.unsplash.com/300x200/?meditation,peace" alt="Meditation Peace" />
        <img className="rounded-lg shadow-md" src="https://source.unsplash.com/300x200/?yoga,relax" alt="Yoga Relaxation" />
      </div>

      {/* Tips Section */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Quick Meditation Tips</h2>
        <ul className="text-green-700 space-y-2">
          <li>🌿 Find a quiet space.</li>
          <li>🧘‍♀️ Sit comfortably and close your eyes.</li>
          <li>🌬 Focus on deep, slow breaths.</li>
          <li>🧠 Let thoughts pass without judgment.</li>
          <li>⏳ Start with just 5-10 minutes daily.</li>
        </ul>
      </div>

    </div>
  );
};

export default MeditationPage;
