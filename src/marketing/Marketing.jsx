import React from "react";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";
import market from "../assets/marketing.jpg";
const Marketing = () => {
  return (
    <>
      {/* <div className='w-full bg-black pt-8 text-white h-auto flex flex-col md:p-4 p-2 '>
                <motion.h1 variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className=" text-center mx-auto text-4xl sm:text-6xl md:text-8xl font-bold   ">MARKETING</motion.h1>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:p-12 p-4 mt-8 '>

                    {
                        [1, 1, 1, 1, 1, 1].map((item, i) => {
                            return <div className="group relative overflow-hidden h-72 w-64 bg-blue-800 rounded-xl mx-auto  ">
                                <div
                                    className="absolute w-56 h-64 bg-gray-50 z-10 top-4 left-4 opacity-50 rounded-2xl blur group-hover:blur-none [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]"
                                ></div>
                                <div
                                    className="absolute w-56 h-64 z-10 top-4 left-4 p-3 rounded-2xl flex flex-col justify-end items-start gap-4 [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]"
                                >
                                    <img src={market} alt="" />
                                </div>

                                <svg
                                    y="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    width="100"
                                    viewBox="0 0 10 10"
                                    preserveAspectRatio="xMidYMid meet"
                                    height="100"
                                    className="fill-blue-200 w-64 h-64 absolute -bottom-20 -left-32"
                                >
                                    <path
                                        d="M0,5A5,5,0,1,0,5,0,5,5,0,0,0,0,5ZM8.12,5A3.12,3.12,0,1,1,5,1.88,3.12,3.12,0,0,1,8.12,5Z"
                                    ></path>
                                </svg>
                            </div>

                        })
                    }




                </div>
            </div> */}
    </>
  );
};

export default Marketing;
