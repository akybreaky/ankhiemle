"use client";

import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);
  
    const handleVideoEnd = () => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 700);
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <video
        src="/logo-preloader.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-80 h-80 object-cover"
      />
    </div>
  );
};

export default Preloader;
