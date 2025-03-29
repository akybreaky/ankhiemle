"use client";

import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import { motion } from "motion/react";


const Home = () => {


  return (
    <section>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.5, type: 'spring', stiffness: 120}}
        >
          <Image src={assets.profile_img} alt="" className="rounded-full w-40"/>
        </motion.div>

        <motion.h3
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
         className="flex items-end gap-2 text-xl md:text-2xl mb-3">
          Hi! I'm An-Khiem Le <Image src={assets.hand_icon} alt="" className="w-6"/>
        </motion.h3>

        <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
         className="text-3xl sm:text-6xl lg:text-[66px]">
          computer science student based in Montreal
        </motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className="max-w-2xl mx-auto">
        I am a second-year Computer Science student at Concordia University, enrolled in the Co-operative Education program. I am a dedicated and passionate learner with a keen interest in discovering and mastering new technologies.
        </motion.p>

        <motion.div
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.2}}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button variant="outline" size="lg" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
            <a href="/An-Khiem_Le_CV.pdf" download className="text-lg">download cv</a>
            <FiDownload/>
          </Button>
          <div className="mb-8 xl:mb-8">
            <Social containerStyles="flex gap-4" iconStyles="w-10 h-10 sm:mt-8 sm:mt-4 border rounded-full border-gray-500 flex justify-center items-center hover:transition-all duration-500"/>
          </div>
        </motion.div>

        <div className="h-15">
          <Footer />
        </div>

      </div>
    </section>
  )
}

export default Home