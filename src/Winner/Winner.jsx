

import React from 'react'
import { styles } from '../styles';
import { fadeIn } from '../varients';
import { motion } from 'framer-motion'
import './winner.css'
import trophy from '../assets/trophy.png'

const Winner = () => {
    return (
        <div className='w-full h-auto p-8 mb-8 bg-black'>
            <div className='w-full flex items-center justify-center'>
                <motion.h1 variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="text-white mx-auto text-4xl font-bold   ">Sponsors</motion.h1>

            </div>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 my-4'>

                <div className='w-full h-full flex items-center justify-center '>
                    <img src={trophy} alt="" />
                </div>

                <div className=' h-full text-white '>
                    <div className="w-full h-full  flex flex-col items-center justify-center gap-8">
                        <h1 className='text-white text-center text-4xl md:text-7xl font-bold'>100000</h1>
                        <div>
                            <p className='text-center md:text-5xl text-3xl font-bold'> 25000 For Each Domain</p>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Winner
