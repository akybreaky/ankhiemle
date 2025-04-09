import React, { useState } from "react";
import Spotify from "./Spotify";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const SpotifyCarousel = () => {
  const tracks = [
    {
      link: "https://open.spotify.com/track/4D2DFuqs2PwLiHbcf6CX47?si=8463d1573ff3424a",
      title: "Hampstead by Ariana Grande",
      description: "\"Hampstead\" is a song with a modern twist.  It begins with a piano, but not the clean, cozy type you'd find in an empty bar.  Instead, it has a murky, chorused feel, almost if it came from outer space.  This distinct sound flows perfectly into the second part of the music, creating an ethereal ambiance."
    },
    {
      link: "https://open.spotify.com/track/0YJVQS3v3ocOMPzVy9yuXE?si=d63d79d1fd684322",
      title: "BTG by KiiiKiii",
      description: "\"BTG\" combines elegant rap elements with dreamy synth arpeggios and funky bass sounds.  It captures their trademark sound, creating a captivating listening experience that is both refined and enjoyable."
    },
    {
      link: "https://open.spotify.com/track/4t9PBD27dndlf6YMBK2ROc?si=995f20b0697a49de",
      title: "Track 10 by Charli XCX",
      description: "\"Track 10\" is a remix of the previously unrelkeased song \"Blame it on Your Love,\" making it the only song on the project. Hyperpop, experimental, pop in general — there's so much going on here and it's incredible."
    },
    {
        link: "https://open.spotify.com/track/4E0P1xs3JNmsNr5c5nFTZJ?si=c1bb9813601c4a06",
        title: "Back to Me by The Marías",
        description: "\"Back to me\" is what comes after — the breakup actually happens when an ex moves on to someone new. It deals with the emotions that come along with that. Even though in the end you may not want them back at all, in the moment, that's all you want to relieve the pain."
    },
    {
      link: "https://open.spotify.com/track/2s6Jh6GmDhAOsSMII07fVs?si=f2e9749263aa4f0d",
      title: "Tonight by PinkPantheress",
      description: "Kicking off her year in style, PinkPantheress returns with her latest track \"Tonight\", a spellbinding blend of breakbeats, garage, house, and trip hop."
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