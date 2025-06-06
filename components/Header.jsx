"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import { assets } from "@/assets/assets";
import MobileNav from "./MobileNav";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="fixed top-0 right-0 xl:right-120 lg:right-70 -z-20 translate-y-[-40%]">

        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <div
        className={`w-full fixed px-4 lg:px- xl:px-[9%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md dark:shadow-gray-400/20" : ""
        }`}
      >
        <Link href="/">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} className="w-28 cursor-pointer mr-14" alt="" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Nav />
        </div>
        
        <div className="flex items-center gap-5">
          {/* Toggle for the Dark Mode */}
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6 flex items-center sm:ml-90 md:ml-1" />
          </button> 
     
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
          </Link>
        </div>

        {/* ---- MOBILE NAV ---- */}
        <div className="md:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
