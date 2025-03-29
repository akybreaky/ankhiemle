import { assets } from "@/assets/assets"
import Image from "next/image"
import Footer from "@/components/Footer"

const projectsList = [
  {
    title: "Portfolio Website",
    description: "React JS, Next JS, Tailwind CSS",
    bgImage: "/work-1.png",
    link: "https://github.com/akybreaky/ankhiemle.github.io",
  },
  {
    title: "Pet Adoption Website",
    description: "HTML, CSS, JavaScript, Node.js",
    bgImage: "/work-2.png",
    link: "https://github.com/akybreaky/pet-website",
  },
];

const projects = ({isDarkMode}) => {
    return (
      <div id="projects" className="w-full px-[12%] py-30">

        <h4 className="text-center mb-3 text-lg">
          Latest work
        </h4>

        <h2 className="text-center text-5xl">
          my projects
        </h2>

        <br></br>
        <br></br>
        <br></br>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Through my projects, I've gained hands-on experience in web development using HTML, CSS, JavaScript, Node.js, React.js, and Next.js. I focus on clean design, responsive layouts, and efficient functionality, continuously refining my problem-solving skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 dark:text-black">
          {projectsList.map((project, index) => (
            <div key={index} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pinter group" style={{backgroundImage: `url(${project.bgImage})`}}>
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold font-outfit">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2x_2x_0_#000] group-hover:bg-[#46baed] transition">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" >
                  <Image src={assets.send_icon} alt="" className="w-5"/>
                  </a>
                </div>
                </div>
            </div>
          ))}
        </div>

        <a className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500">
          Coming soon <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow" className="w-4"/>
        </a>

        <div className="h-4">
          <Footer />
        </div>

      </div>
    )
  }
  
  export default projects