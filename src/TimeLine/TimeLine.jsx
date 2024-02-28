"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import { motion } from "framer-motion"
import { fadeIn } from "../varients";


const schedule = [
    {
        "day": "Day 1",
        "time": "8:30 AM",
        "event": "Participants Registration"
    },
    {
        "day": "Day 1",
        "time": "9:00 AM",
        "event": "Inauguration Session and Lab Allocation"
    },
    {
        "day": "Day 1",
        "time": "10:00 AM",
        "event": "Hackathon Commences"
    },
    {
        "day": "Day 1",
        "time": "1:00 PM",
        "event": "Lunch"
    },
    {
        "day": "Day 1",
        "time": "4:00 PM",
        "event": "Mentoring Session"
    },
    {
        "day": "Day 1",
        "time": "6:00 PM",
        "event": "Evening Snacks"
    },
    {
        "day": "Day 1",
        "time": "8:30 PM",
        "event": "Dinner"
    },
    {
        "day": "Day 1",
        "time": "11:00 PM",
        "event": "Jamming Session"
    },
    {
        "day": "Day 2",
        "time": "2:00 AM",
        "event": "Midnight Refreshments"
    },
    {
        "day": "Day 2",
        "time": "7:00 AM",
        "event": "First Judging Round"
    },
    {
        "day": "Day 2",
        "time": "8:30 AM",
        "event": "Breakfast"
    },
    {
        "day": "Day 2",
        "time": "10:00 AM",
        "event": "Coding Concludes and 2nd Judging/Pitching Round Starts"
    },
    {
        "day": "Day 2",
        "time": "1:00 PM",
        "event": "Lunch"
    },
    {
        "day": "Day 2",
        "time": "2:00 PM",
        "event": "Valedictory Function"
    }
]



export function TimeLine() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);








    return (
        <div className="relative">
            <div className="bg-gray-900 w-full text-white py-8 ">

                <motion.h1
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    id="scheduleHead"
                    className="text-4xl w-full font-bold text-center mb-8"
                >
                    SCHEDULE
                </motion.h1>


                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {schedule.map((item, index) => (
                        <motion.div variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }} key={index} className="bg-gray-800 rounded p-4">
                            <div className="flex items-center mb-2">
                                <CalendarTodayIcon />
                                <span className="ml-2">{item.day}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <AccessTimeIcon />
                                <span className="ml-2">{item.time}</span>
                            </div>
                            <div className="flex items-center">
                                <EventIcon />
                                <span className="ml-2">{item.event}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div
                className="h-full  top-0 w-full dark:border dark:border-white/[0.1] absolute overflow-clip z-0 "
                ref={ref}
            >
                <GoogleGeminiEffect
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                />

            </div>
        </div>
    );
}
