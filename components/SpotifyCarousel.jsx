import React, { useState } from "react";
import Spotify from "./Spotify";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const SpotifyCarousel = () => {
  const tracks = [
    {
      link: "https://open.spotify.com/track/1hoeP1oPYlhcv6iRCtB7pT?si=dece6a83bd7f4bdb",
      title: "Man of the Year by Lorde",
      description: "\"Man Of The Year\' serves as the second single from Lorde's fourth album, Virgin. It follows her comeback, “What Was That.”"
    },
    {
      link: "https://open.spotify.com/track/2Y2h2TYOEaNvSQVlhKUU5C?si=d35152ea7dbc4322",
      title: "Nightmarish by Brandy Senki",
      description: "Japanese Rock, J-Pop, Japanese Indie"
    },
    {
      link: "https://open.spotify.com/track/0hRr7x68aApt0TX1AIAA9W?si=e408d689cd984d07",
      title: "깨어 (Are You Alive) by tripleS",
      description: "tripleS unite together and use their powerful voices to remind the listeners about the simplicity of seeking happiness in the present than the past on “깨어 (Are You Alive)”, the title track coming off of their second full-group album ASSEMBLE25."
    },
    {
      link: "https://open.spotify.com/track/7A6f6HJqsl5UdG7kBXzXSf?si=28e4024e6a3d4174",
      title: "Heaven is a Home... by Kali Uchis",
      description: "\"Heaven Is A Home\" is the stunning opening track from Kali Uchis's fifth studio album, Sincerely, and it serves as a powerful introduction to the emotional depth and lyrical vulnerability that permeate the entire project."
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