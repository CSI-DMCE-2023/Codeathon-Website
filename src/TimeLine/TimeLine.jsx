"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import logo from "../assets/logo.png";

const experiences = [
  {
    title: "Orientation Session",
    iconBg: "#FFFFFF",
    day: "Day 1 - 9:00AM",
    detail:
      "An orientation session will be convened during which participants will be assigned to their designated labs and working spaces.",
  },
  {
    title: "Hackathon Commences",
    iconBg: "#FFFFFF",
    day: "Day 1 - 10:00AM",
    detail:
      "The hackathon begins, igniting a spirit of innovation as participants eagerly delve into their projects.",
  },
  {
    title: "Lunch 🍽️",
    iconBg: "#FFFFFF",
    day: "Day 1 - 1:00 PM",
    detail:
      " Lunch break for participants, to recharge and refuel before diving back into their projects with renewed energy.",
  },
  {
    title: "Mentoring Round",
    iconBg: "#FFFFFF",
    day: "Day 1 - 6:00 PM",
    detail:
      "The mentoring round commences, providing participants with invaluable guidance and insights to enhance their projects.",
  },
  {
    title: "Evening Snacks 🍪",
    iconBg: "#FFFFFF",
    day: "Day 1 - 7:00 PM",
    detail:
      "Evening snacks will be served, offering participants a chance to rejuvenate and socialize after a productive day of hacking.",
  },
  {
    title: "Dinner 🍽️",
    iconBg: "#FFFFFF",
    day: "Day 1 - 9:30 PM",
    detail:
      "Dinner will be provided, offering participants an opportunity to unwind and network with fellow attendees after a day of productive collaboration.",
  },
  {
    title: "Jamming Session 🎸",
    iconBg: "#FFFFFF",
    day: "Day 1 - 11:30 PM",
    detail:
      "A jamming session will take place, allowing participants to unwind and enjoy creating music together in a relaxed atmosphere.",
  },
  {
    title: "Midnight Refreshments 🧃",
    iconBg: "#FFFFFF",
    day: "Day 2 - 2:00 AM",
    detail:
      "Midnight refreshments will be available, offering participants a chance to recharge and refuel during the late hours of the hackathon.",
  },
  {
    title: "First Judging Round",
    iconBg: "#FFFFFF",
    day: "Day 2 - 7:00 AM",
    detail:
      "The first judging round will take place, evaluating projects based on the progress achieved up to the day prior, highlighting participants' accomplishments thus far in the hackathon.",
  },
  {
    title: "Breakfast ☕",
    iconBg: "#FFFFFF",
    day: "Day 2 - 9:00 AM",
    detail:
      "Breakfast will be served, fueling participants for another day of innovation and problem-solving.",
  },
  {
    title: "Final Juding Round - Hackathon Concludes",
    iconBg: "#FFFFFF",
    day: "Day 2 - 10:00 AM",
    detail:
      "The final judging round marks the conclusion of the hackathon, where projects are evaluated to determine the winners based on their innovation, execution, and impact.",
  },
  {
    title: "Snacks 🍪",
    iconBg: "#FFFFFF",
    day: "Day 2 - 12:00 PM",
    detail:
      "Snacks will be offered post-hackathon, providing participants with a moment to relax and celebrate their accomplishments.",
  },
  {
    title: "Closure Ceremony 🎉",
    iconBg: "#FFFFFF",
    day: "Day 2 - 1:00 PM",
    detail:
      "Snacks will be offered post-hackathon, providing participants with a moment to relax and celebrate their accomplishments.",
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgb(15 23 42 / 70%)",
      color: "#fff",
      zIndex: 100,
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631", zIndex: 100 }}
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
      <h3 className="text-white text-[20px] md:text-[24px] font-bold">
        {experience.title}
      </h3>
    </div>
    <div>
      <p className="text-white text-[20px] md:text-[24px] font-bold">
        {experience.detail}
      </p>
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
    <div className="relative" id="timeline">
      <div className="bg-black p-8 w-full">
        <motion.div
          id="timeline"
          className="w-full mx-auto"
          variants={textVariant()}
        >
          <h2
            className={styles.sectionHeadText + " text-center w-full mx-auto"}
          >
            SCHEDULE
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-col z-40">
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
