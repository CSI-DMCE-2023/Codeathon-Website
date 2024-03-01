import React from "react";
import { styles } from "../styles";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";
import "./winner.css";
import trophy from "../assets/trophy.png";
// import { gsap } from 'gsap';

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
            className="w-full h-auto p-8 mb-8 bg-gradient-to-b bg-black"
        >
            <div className="w-full flex items-center justify-center">
                <motion.h1
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-white mx-auto text-2xl sm:text-4xl md:text-7xl font-bold"
                >
                    Prizes
                </motion.h1>
            </div>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 my-4">
                <motion.div variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="w-full h-full flex items-center justify-center flex-col ">
                    <h1 className="text-white text-center sm:text-5xl text-4xl md:text-7xl font-bold -m-8  mt-12">

                        100000/-


                    </h1>
                    <div
                        className=" flex items-center justify-center"

                    >
                        <img
                            className="h-[70%]"
                            initial={{ scale: 0 }}
                            id="trophy"
                            src={trophy}
                            alt=""
                        />
                    </div>
                </motion.div>
                <div className=" h-full text-white">
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
                    <div className=" flex-none w-fit right-20 bottom-20">
                            <p>hover/tap to see prize</p>

                        </div>
                </div>
            </div>
        </div>
    );
};

export default Winner;
