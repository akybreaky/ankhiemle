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
      link: "https://open.spotify.com/track/6efcMTYO2lJ0zcpQEPk8m1?si=0def4dc3bccb471f",
      title: "Come Over by LE SSERAFIM",
      description: "It is a dreamy retro-sounding nu jazz and bossa nova song with lyrics that are \"flirty, carefree, and a tad sulty\" about tempting a lover to release their inhibitions and dance with them."
    },
    {
        link: "https://open.spotify.com/track/3L0JDlycMhSA7R0M0OfNIY?si=92b0be02666e4a81",
        title: "Ay No Puedo by The Marías",
        description: "The Marías describe their tenth-track, Ay No Puedo, as a bittersweet song because \"Ay, No Puedo\" can mean that the love is so immense, that I can't contain it inside of me or it could've meant \"Oh, this pain is too much for me to handle\"."
    },
    {
      link: "https://open.spotify.com/track/2tej1KSqNuxwywIpY1rDRc?si=99c0ecc9d27e431a",
      title: "Hide and Seek by Imogen Heap",
      description: "\"Hide and Seek\" by Imogen Heap is a folktronica ballad that uses a cappella vocals and a harmonizer to convey a sense of loss and the pain of separation, often interpreted as a reflection on a breakup or divorce. The use of vocoder effects creates a unique sound that enhances the emotional impact of the song. Note: Imogen Heap inspired me to combine two of my hobbies: music and coding. Seeing her use the vocodder in her live performances is truly inspiring."
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