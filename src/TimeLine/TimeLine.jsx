"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import logo from '../assets/logo.png'



const experiences = [
    {
        title: 'Registration',
        iconBg: '#FFFFFF',
        day: '....',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
    {
        title: 'Round One',
        iconBg: '#FFFFFF',
        day: '11 AM To 12.30 PM ',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
    {
        title: 'Round Two',
        iconBg: '#FFFFFF',
        day: '2 PM To 4 PM',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
    {
        title: 'Round Two',
        iconBg: '#FFFFFF',
        day: '2 PM To 4 PM',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
    {
        title: 'Round Two',
        iconBg: '#FFFFFF',
        day: '2 PM To 4 PM',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
    {
        title: 'Round Two',
        iconBg: '#FFFFFF',
        day: '2 PM To 4 PM',
        detail:
            "Amidst the chaos, find your calm; within the noise, discover your melody. Embrace the journey, for it molds the soul and shapes the spirit. With each step forward, let courage be your guide and resilience your strength. In the tapestry of life, weave threads of kindness, love, and gratitude."

    },
];

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#0F172A', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.day}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={logo}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-cover"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[20px] md:text-[24px] font-bold">{experience.title}</h3>

        </div>
        <div>
            <p className="text-white text-[20px] md:text-[24px] font-bold">{experience.detail}</p>
        </div>


    </VerticalTimelineElement>
);

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
            <div className="bg-black p-8">
                <motion.div variants={textVariant()}>
                    <h2 className={styles.sectionHeadText + "text-center w-full mx-auto"}>SCHEDULE</h2>
                </motion.div>

                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))}
                    </VerticalTimeline>
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
