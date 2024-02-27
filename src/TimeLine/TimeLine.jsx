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
        <div
            className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] relative overflow-clip"
            ref={ref}
        >
            <div className="flex items-center flex-col py-8"> <h1 className="text-white mx-auto text-4xl font-bold ">SCHEDULE</h1>

                <div className="w-full flex items-center justify-center mt-4 gap-4 flex-wrap ">
                    {
                        schedule.length && schedule.map((item, i) => {
                            return <div class="card1 text-white">
                                <div class="card2 p-2">
                                    <div className="flex gap-4 p-2">
                                        <CalendarTodayIcon /> : {item.day}
                                    </div>
                                    <div className="flex gap-4 p-2">
                                        <AccessTimeIcon /> : {item.time}
                                    </div>
                                    <div className="flex gap-4 p-2">
                                        <EventIcon /> : {item.day}
                                    </div>

                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
            <div>

            </div>
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
    );
}
