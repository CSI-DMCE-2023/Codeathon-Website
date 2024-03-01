import React from "react";
import { styles } from "../styles";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";
import "./winner.css";
import video from '../assets/celeb.mp4'

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
        <div
            id="prizes"
            className="relative w-full min-h-screen p-8 mb-8 bg-gradient-to-b "
        >
            <video
                autoPlay
                muted
                loop
                className="absolute -z-40 inset-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                {/* Add additional source elements for different video formats if needed */}
                Your browser does not support the video tag.
            </video>
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
                <motion.div variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="w-full h-full flex items-center justify-center flex-col ">
                    <p  data-text="1,00,000/-" className=" text text-center sm:text-5xl text-4xl md:text-7xl font-bold -m-8  mt-12 text-yellow-400">

                        1,00,000/-


                    </p>

                </motion.div>
                <div className=" h-full text-white max-md:my-8">
                    <div className="w-full h-full  flex flex-col items-center justify-center gap-8">
                        <div className="w-full flex justify-center items-center h-full gap-8 flex-wrap md:mt-12">


                            <div class="light-button">
                                <button class="bt">
                                    <div class="light-holder w-[200px] ">
                                        <div class="dot"></div>
                                        <div class="light"></div>
                                    </div>
                                    <div class="button-holder w-[200px] ">

                                        <p>25000/-</p>
                                        <p>AUTOMATION</p>
                                    </div>
                                </button>
                            </div>
                            <div class="light-button">
                                <button class="bt">
                                    <div class="light-holder w-[200px]">
                                        <div class="dot"></div>
                                        <div class="light"></div>
                                    </div>
                                    <div class="button-holder w-[200px]">

                                        <p>25000/-</p>
                                        <p>SOCIAL IMPACT</p>
                                    </div>
                                </button>
                            </div>
                            <div class="light-button">
                                <button class="bt">
                                    <div class="light-holder w-[200px]">
                                        <div class="dot"></div>
                                        <div class="light"></div>
                                    </div>
                                    <div class="button-holder w-[200px]">

                                        <p>25000/-</p>
                                        <p>FINTECH</p>
                                    </div>
                                </button>
                            </div>
                            <div class="light-button">
                                <button class="bt">
                                    <div class="light-holder w-[200px]">
                                        <div class="dot"></div>
                                        <div class="light"></div>
                                    </div>
                                    <div class="button-holder w-[200px]">

                                        <p>25000/-</p>
                                        <p>SUSUTAIBLE <br /> DEVELOPMENT</p>
                                    </div>
                                </button>
                            </div>



                        </div>

                    </div>
                    <div className=" text-center py-2 opacity-65 w-full  right-20 bottom-20">
                        <p>hover/tap to see prize</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Winner;
