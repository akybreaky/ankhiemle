"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import SpotifyCarousel from "@/components/SpotifyCarousel";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Co-op Computer Science at Concordia University. 2024-2027 (expected)",
  },
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Interests",
    description: "UX/UI Design, AI Systems, Machine Learning, Web Development",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Hobbies",
    description: "Video Games, Reading, Movies/TV, Video Editing, Working Out",
  },
]



const aboutme = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
    return (
      <div className="w-full px-[12%] py-30">
        <h4 className="text-center mb-3 text-lg">
          Introduction
        </h4>
        <h2 className="text-center text-5xl">
          about me
        </h2>

        <section className="flex w-full flex-col items-center gap-20 my-20">
          <div className="flex-1">
            <p className="mb-10 max-w-2xl text-center mx-auto">
            I am a second-year Computer Science student at Concordia University, enrolled in the Co-operative Education program. Previously, I pursued studies in commerce during my time at CEGEP. However, my desire to explore and excel in technology-driven fields led me to transition into computer science. I am a dedicated and passionate learner with a keen interest in discovering and mastering new technologies. My academic focus lies in software development, algorithms, and data structures, and I am committed to continuously expanding my knowledge and expertise in these areas.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {infoList.map(({icon, iconDark, title, description}, index) => {
            return <div className={isDarkMode ? "border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-gray-800 hover:-translate-y-1 duration-500" : "border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-[#e8f8ff] hover:-translate-y-1 duration-500"} key={index}>
              <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3"/>
              <h3 className="my-4 font-semibold">{title}</h3>
              <p className={isDarkMode ? 'text-white text-sm': 'text-gray-600 text-sm'}>{description}</p>
            </div>
          })}
          </div> 
          
          <br></br>
          <div className="my-10">
            <h2 className="text-center text-3xl mb-4">my music taste</h2>
            <SpotifyCarousel />
          </div>

          </div>  
        </section>

        <div className="h-4">
          <Footer />
        </div>
      </div>
    )
  }
  
  export default aboutme