"use client";

import { assets } from "@/assets/assets"
import Image from "next/image"
import Footer from "@/components/Footer"
import React, {useState} from "react"


const contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fa5fc7c6-37d9-4910-beb5-d6024da83795");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
      <div id="contact" className="w-full px-[12%] py-30">
        <h4 className="text-center mb-3 text-lg">
          Get in touch
        </h4>

        <h2 className="text-center text-5xl">
          contact me
        </h2>

        <br></br>
        <br></br>
        <br></br>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Feel free to reach out for collaborations, job opportunities, or any inquiries. Whether you have a project idea, need assistance, or just want to connect, I'm always open to discussing new opportunities and sharing ideas.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg: gap-6 mt-10 mb-8">
            <input type="text" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:text-black" name="name"/>

            <input type="email" placeholder="Enter your email" required 
            className="flex-1 p-3 outline-none border-[0.5px]  border-gray-400 rounded-md bg-white dark:text-black" name="email"/>
          </div>

          <textarea rows="6" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6" name="message"></textarea>

          <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-[#000] duration-500 ">Submit <Image src={assets.right_arrow_white} alt="" className="w-4"/></button>

          <p className="mt-4">{result}</p>
        </form>

        <div className="h-1">
          <Footer />
        </div>
      </div>
    )
  }
  
  export default contact