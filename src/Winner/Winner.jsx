import React from "react";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";
import "./winner.css";
// import video from '../assets/celeb.mp4'

const Winner = () => {
  // var tl = gsap.timeline();

  // gsap.set('.trophy', {
  //     scale: 0,
  // })

  // gsap.to('.trophy', {
  //     duration: 1,
  //     scale: 1,
  // });

  return (
    <div id="prizes" className="relative w-full min-h-screen p-8 pb-8 ">
      <div className="w-full h-full flex items-center justify-center z-40">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white mx-auto text-4xl sm:text-6xl md:text-8xl font-bold"
        >
          PRIZE POOL
        </motion.h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 my-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full h-full flex items-center justify-center flex-col "
        >
          <p
            
            className=" text text-center sm:text-5xl text-4xl md:text-7xl font-bold -m-8  mt-12 text-cyan-400  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            6,00,000/-  
          </p>
        </motion.div>
        <div className=" h-full text-white max-md:my-8">
          <div className="w-full h-full  flex flex-col items-center justify-center gap-8 text-xl font-md  mt-[3.5rem]">
            
            Lorem ipsum is placeholder text
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
