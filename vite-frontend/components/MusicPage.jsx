import React from 'react';

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center p-6">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-purple-800 mb-4 text-center">
        Relaxing Music
      </h1>
      <p className="text-lg text-purple-700 mb-8 text-center max-w-2xl">
        Listen to calming tracks designed to help you relax, focus, meditate, or fall asleep peacefully.
      </p>

      {/* Music Playlist */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Music Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?music,relax" alt="Relax Music" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Relaxing Sounds</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-1.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Music Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?focus,music" alt="Focus Music" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Focus Beats</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-2.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Music Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?sleep,music" alt="Sleep Music" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Sleep Melodies</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-3.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Music Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?nature,sound" alt="Nature Sounds" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Nature Sounds</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-4.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Music Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?waves,calm" alt="Ocean Waves" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Ocean Waves</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-5.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Music Card 6 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img src="https://source.unsplash.com/300x200/?piano,relax" alt="Soft Piano" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Soft Piano</h2>
          <audio controls className="w-full">
            <source src="your-audio-file-url-6.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

      </div>

    </div>
  );
};

export default MusicPage;
