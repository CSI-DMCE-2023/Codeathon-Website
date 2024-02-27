"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect"
import './timeline.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
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

        <div className="h-auto w-full relative">


            <div className="flex items-center flex-col py-8 z-50 bg-black">

          <h1 className="text-white text-4xl font-bold ">SCHEDULE</h1>

                <div className="w-full grid grid-col-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-2  m-2 h-full z-10  ">
                    {
                        schedule.length && schedule.map((item, i) => {
                            return <div class="card1 text-white border-b border-gray-700">
                                <div class="card2 p-1 h-full">
                                    <div className="flex gap-4 p-1">
                                        <CalendarTodayIcon /> : {item.day}
                                    </div>
                                    <div className="flex gap-4 p-1">
                                        <AccessTimeIcon /> : {item.time}
                                    </div>
                                    <div className="flex gap-4 p-1">
                                        <EventIcon /> : {item.event}
                                    </div>

                                </div>
                            </div>
                        })
                    }

                </div>
            </div>

            <div
                className="h-full  top-0 bg-black w-full dark:border dark:border-white/[0.1] absolute overflow-clip z-0 "
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
