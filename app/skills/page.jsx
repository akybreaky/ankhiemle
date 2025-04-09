"use client";

import { assets } from "@/assets/assets"
import Image from "next/image"
import Footer from "@/components/Footer"
import { ThemeContext } from "@/components/ThemeContext"
import { useContext } from "react";

const skillsList = [
  {
    icon: assets.languages_icon,
    iconDark: assets.languages_icon_dark,
    title: "Programming Languages",
    description: "Java, Python, C, JavaScript, Clojure, Assembly x86.",
  },
  {
    icon: assets.languages_icon,
    iconDark: assets.languages_icon_dark,
    title: "Web Technologies",
    description: "HTML, CSS, Tailwind CSS, JavaScript, Responsive Web Design.",
  },
  {
    icon: assets.languages_icon,
    iconDark: assets.languages_icon_dark,
    title: "Libraries & Frameworks",
    description: "Node.js, React.js, Next.js.",
  },
  {
    icon: assets.languages_icon,
    iconDark: assets.languages_icon_dark,
    title: "Developer Tools",
    description: "Visual Studio Code, Eclipse, Git, GitHub.",
  },
];

const skills = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    return (
      <div id="skills" className="w-full px-[12%] py-30">
        <h4 className="text-center mb-3 text-lg">
          Experience
        </h4>
        
        <h2 className="text-center text-5xl">
          my skills
        </h2>

        <br></br>
        <br></br>
        <br></br>


        <p className="text-center max-w-3xl mx-auto mt-5 mb-12">
          I have a strong foundation in programming, with experience in languages such as Java, Python, C, and JavaScript. My expertise extends to web technologies, including HTML, CSS, and responsive web design. I am proficient in frameworks like Node.js, React.js, and Next.js, allowing me to build dynamic and scalable web applications. Additionally, I am skilled in using developer tools such as Visual Studio Code, Eclipse, and GitHub for efficient code development and version control.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {skillsList.map(({icon, iconDark, title, description}, index) => (
            <div key={index}
            className={isDarkMode ? "border border-white rounded-lg px-8 py-12 hover:bg-gray-800 hover:-translate-y-1 duration-300" : "border border-gray-600 rounded-lg px-8 py-12 hover:bg-[#e8f8ff] hover:-translate-y-1 duration-300"}>
              <Image src={isDarkMode ? iconDark : icon} alt="" className="w-10"/>
              <h3 className={isDarkMode ? "text-lg my-4 text-WHITE": "text-lg my-4 text-gray-700"}>{title}</h3>
              <p className={isDarkMode ? "text-sm text-white leading-5": "text-sm text-gray-600 leading-5"}>{description}</p>
            </div>
          ))}
        </div>

        <div className="h-4">
          <Footer/>
        </div>
      </div>
    )
  }
  
  export default skills