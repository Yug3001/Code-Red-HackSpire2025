import React from 'react';

const SleepStoriesPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">

      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
        Sleep Stories
      </h1>
      <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl">
        Drift into peaceful sleep with calming bedtime stories. Relax, imagine, and let go of the day’s worries.
      </p>

      {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Story 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?stars,night" alt="Starry Night" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">The Starry Night</h2>
          <p className="text-blue-600">
            In a quiet village, under a velvet sky, stars whispered secrets of distant worlds. Each twinkle was a lullaby, guiding dreams into magical lands...
          </p>
        </div>

        {/* Story 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?forest,mist" alt="Misty Forest" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">The Misty Forest</h2>
          <p className="text-blue-600">
            Deep in a misty forest, trees hummed a soft song. A little fox wandered through the trails, finding a cozy den where dreams danced with fireflies...
          </p>
        </div>

        {/* Story 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?ocean,moon" alt="Moonlit Ocean" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Moonlit Ocean</h2>
          <p className="text-blue-600">
            The ocean waves whispered lullabies to the moon. Boats rocked gently, and the breeze carried dreams across the water to distant sleepy shores...
          </p>
        </div>

        {/* NEW Story 4 (Adult) */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?mountains,sunset" alt="Silent Mountains" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">The Silent Mountains</h2>
          <p className="text-blue-600">
            In the stillness of twilight, the mountains stood timeless. Their silent strength wrapped the valley in peace, where every breath grew softer, lighter...
          </p>
        </div>

        {/* NEW Story 5 (Adult) */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?library,night" alt="Midnight Library" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">The Midnight Library</h2>
          <p className="text-blue-600">
            Hidden in the heart of the city, a library opened only at midnight. Books glowed softly, sharing stories of wonder, healing every tired soul who wandered in...
          </p>
        </div>

        {/* NEW Story 6 (Adult) */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img src="https://source.unsplash.com/300x200/?desert,stars" alt="Desert Dreams" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Desert Dreams</h2>
          <p className="text-blue-600">
            Beneath the endless desert sky, dreams floated like lanterns. Warm winds carried wishes far across the dunes, soothing every restless heart under the stars...
          </p>
        </div>

      </div>

    </div>
  );
};

export default SleepStoriesPage;
