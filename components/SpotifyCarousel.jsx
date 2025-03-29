import React, { useState } from "react";
import Spotify from "./Spotify";

const SpotifyCarousel = () => {
  const tracks = [
    {
      link: "https://open.spotify.com/track/1aKvZDoLGkNMxoRYgkckZG?si=6b5ec89a533f46a7",
      title: "Magnetic by Illit",
      description: "Described as a dance song with elements of pluggnb and house genre, it is characterized by arpeggio synths and dynamic bass, with lyrics about comparing the heart that runs at full speed towards the person [you] likes to a magnet."
    },
    {
      link: "https://open.spotify.com/track/3coRPMnFg2dJcPu5RMloa9?si=fd04101e483f4c64",
      title: "Whiplash by aespa",
      description: "a EDM-based song featuring strong and fast-paced bass and house beats with lyrics about moving forward without hesitation with your own standards and criteria without being confined by a frame."
    },
    {
      link: "https://open.spotify.com/track/38tXZcL1gZRfbqfOG0VMTH?si=d6142fd2bff747aa",
      title: "How Sweet by NewJeans",
      description: "A song that blends Miami bass and electropop elements, showcasing a vibrant and hip-hop-influenced sound."
    },
    {
        link: "https://open.spotify.com/track/1a19jsjG2DvbN1fVJonKUU?si=a8bb2d458b59422a",
        title: "Beaches by beabadobee",
        description: "Beabadoobee's song Beaches blends elements of indie rock and pop, creating a sunny, upbeat, and refreshing sound that some describe as a 2000s indie rock banger with a serene, self-love theme."
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Carousel */}
      <div className="flex items-center justify-center gap-x-4">
        <button 
          onClick={prevTrack} 
          className="px-2 py-1 bg-gray-300 dark:bg-gray rounded-full hover:bg-gray-400 text-sm sm:text-base flex items-center justify-center dark:text-black"
        >
          ←
        </button>

        <div className="w-[250px] sm:w-[500px] flex justify-center">
          <Spotify link={tracks[currentTrack].link} width="100%" height="80" />
        </div>

        <button 
          onClick={nextTrack} 
          className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400 text-sm sm:text-base flex items-center justify-center dark:text-black"
        >
          →
        </button>
      </div>

      {/* Track Position Indicators */}
      <div className="flex space-x-2">
      {tracks.map((_, index) => (
          <span 
            key={index} 
            className={`w-3 h-3 rounded-full ${index === currentTrack ? "bg-gray-800" : "bg-gray-400"} transition-all duration-300`}
          />
        ))}
      </div>

      {/* Song Title & Description */}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{tracks[currentTrack].title}</h3>
        <p className="text-gray-700 text-sm md:w-100">{tracks[currentTrack].description}</p>
      </div>
    </div>
  );
};

export default SpotifyCarousel;