"use client"
import Image from "next/image"
import {motion} from "framer-motion"

const Homepage = () => {
  const handleSeeProjectsClick = () => {
    window.location.href = '/portfolio';
  };
  const handleContactMeClick = () => {
    window.location.href = '/contact';
  };
  return( 
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}
    >
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
{ /* Image Container */}
<div className="h-1/2 lg:h-full lg:w-1/2 relative ">
  <Image src="/hero.png"alt="" fill className="object-contain h-full w-full"/>
</div>
{ /* Text Container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-40">
    { /* Title */}
    <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
    { /* Description */}
    <p className="md:text-xl">Hello there! Im Reis Bashaija, a tech enthusiast and student of Business Information Technology at Strathmore University. Im passionate about exploring the intersection of technology and business to create innovative solutions.
    </p>
    <p className="md:text-xl">In this website, you will find details about my projects, skills, and interests. Feel free to explore!</p>
    { /* Buttons */}
    <div className="w-full flex gap-4">
      <button onClick={handleSeeProjectsClick} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">See My Projects</button>
      <button onClick={handleContactMeClick} className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
       </div>
    </div>
  </div>
  </motion.div>
  );
};

export default Homepage;
