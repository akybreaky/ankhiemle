import React, { useState } from "react";
import Spotify from "./Spotify";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const SpotifyCarousel = () => {
  const tracks = [
    {
      link: "https://open.spotify.com/track/2jNyiavSywmA472t2m6ZBz?si=e6e58da4f5924f21",
      title: "What Was That by Lorde",
      description: "\"What Was That\" is a song that captures the essence of a fleeting moment, where the singer reflects on a past relationship and the emotions that come with it. The lyrics convey a sense of nostalgia and longing, while the production features dreamy synths and a catchy melody."
    },
    {
      link: "https://open.spotify.com/track/3a9P1PqOV6gr4A9ywDZ7mg?si=7c3eeda1d05d477e",
      title: "CUNTISSIMO by Marina",
      description: "\"CUNTISSIMO\" is a song that celebrates femininity and empowerment, with lyrics that encourage self-love and confidence. The production features a mix of pop and electronic elements, creating an upbeat and catchy sound."
    },
    {
      link: "https://open.spotify.com/track/7Fr2Q6q3rAxFUcMkuvVrXO?si=1f82fe272bb048c2",
      title: "Stateside by PinkPantheress",
      description: "\"Stateside\" is a song that explores the complexities of love and relationships, with lyrics that reflect on the challenges of being in a long-distance relationship. The production features a mix of pop and electronic elements, creating a dreamy and atmospheric sound."
    },
  ];

  const { isDarkMode } = useContext(ThemeContext);
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
          className={isDarkMode ? "px-2 py-1 bg-gray-700 rounded-full hover:bg-gray-600 text-sm sm:text-base flex items-center justify-center text-white": "px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400 text-sm sm:text-base flex items-center justify-center"}
        >
          ←
        </button>

        <div className="w-[250px] sm:w-[500px] flex justify-center">
          <Spotify link={tracks[currentTrack].link} width="100%" height="80" />
        </div>

        <button 
          onClick={nextTrack} 
          className={isDarkMode ? "px-2 py-1 bg-gray-700 rounded-full hover:bg-gray-600 text-sm sm:text-base flex items-center justify-center text-white": "px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400 text-sm sm:text-base flex items-center justify-center"}
        >
          →
        </button>
      </div>

      {/* Track Position Indicators */}
      <div className="flex space-x-2">
      {tracks.map((_, index) => (
          <span 
            key={index} 
            className={`w-3 h-3 rounded-full ${index === currentTrack 
            ? isDarkMode ? "bg-white" : "bg-gray-800" 
            : isDarkMode ? "bg-gray-800" : "bg-gray-400"} transition-all duration-300`}
          />
        ))}
      </div>

      {/* Song Title & Description */}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{tracks[currentTrack].title}</h3>
        <p className={isDarkMode ? 'text-white text-sm md:w-100' : 'text-gray-700 text-sm md:w-100'}>{tracks[currentTrack].description}</p>
      </div>
    </div>
  );
};

export default SpotifyCarousel;