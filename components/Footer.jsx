"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className="w-full py-6 px-6 md:px-16 mt-auto">
      <div className={isDarkMode ? "text-center text-white/60 text-sm mt-4" : "text-center text-gray-500 text-sm mt-4"}>
        © {new Date().getFullYear()} An-Khiem Le. All Rights Reserved.
        <p>
          Updated on May 3, 2025.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
