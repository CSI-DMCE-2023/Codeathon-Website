import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const experiences = [
  {
    title: "Registration Starts",
    day: "19th March",
    detail:
      "Please sign up on Unstop and secure your place by submitting a PowerPoint presentation addressing the provided problem statement, along with a comprehensive video shared via either YouTube or Google Drive link.",
  },
  {
    title: "Registration Ends",
    day: "28th March",
    detail: "Join us on this journey by registering before the final deadline.",
  },
  {
    title: "Round 1 Results",
    day: "29th March",
    detail:
      "Team leaders will be notified of their selection for the hackathon, and will be provided with further details regarding the event.",
  },
  {
    title: "Round 2 Results",
    day: "4th April",
    detail:
      "Qualified teams from round 1 will be judged based on their submitted video explaining the submitted PPT, and will be notified of their selection for the final round.",
  },
  {
    title: "Welcome to LogiTHON! 🎉",
    day: "19th April - 8:00AM",
    detail: "All the selected teams are invited to the venue.",
  },
  {
    title: "Orientation Session",
    day: "19th April - 9:00AM",
    detail:
      "An orientation session will be convened during which participants will be assigned to their designated labs and working spaces.",
  },
  {
    title: "Hackathon Commences",
    day: "19th April - 10:00AM",
    detail:
      "The hackathon begins, igniting a spirit of innovation as participants eagerly delve into their projects.",
  },
  {
    title: "Lunch 🍽️",
    day: "19th April- 1:00 PM",
    detail:
      "Lunch break for participants, to recharge and refuel before diving back into their projects with renewed energy.",
  },
  {
    title: "Mentoring Round",
    day: "19th April - 4:00 PM",
    detail:
      "The mentoring round commences, providing participants with invaluable guidance and insights to elevate their projects.",
  },
  {
    title: "Evening Snacks 🍪",
    day: "19th April - 7:00 PM",
    detail:
      "Participants will enjoy evening refreshments, providing an opportunity to unwind and mingle after a day of productive hacking.",
  },
  {
    title: "Dinner 🍽️",
    day: "19th April - 8:30 PM",
    detail:
      "Dinner will be provided, offering participants an opportunity to unwind and network with fellow attendees after a day of productive collaboration.",
  },
  {
    title: "Jamming Session 🎸",
    day: "19th April - 11:30 PM",
    detail:
      "Harmonious Break: Join the Jamming Session for a Relaxing and Creative Interlude!",
  },
  {
    title: "Midnight Refreshments 🧃",
    day: "20th April - 2:00 AM",
    detail:
      "Midnight refreshments will be available, offering participants a chance to recharge and refuel during the late hours of the hackathon.",
  },
  {
    title: "First Judging Round",
    day: "20th April - 7:00 AM",
    detail:
      "Evaluating projects based on the progress achieved up to the day prior, highlighting participants' accomplishments thus far in the hackathon.",
  },
  {
    title: "Breakfast ☕",
    day: "20th April - 9:00 AM",
    detail:
      "Breakfast will be served, fueling participants for another day of innovation and problem-solving.",
  },
  {
    title: "Final Juding Round - Hackathon Concludes",
    day: "20th April - 10:00 AM",
    detail:
      "In the Final Judging Round, Projects are Assessed for Innovation, Execution, and Impact, Leading to Prize Distribution.",
  },
  {
    title: "Lunch",
    day: "20th April - 12:00 PM",
    detail:
      "Recharge and Refuel: Enjoy a Delectable Lunch Break for the Teams!",
  },
  {
    title: "Closure Ceremony 🎉",
    day: "20th April - 1:00 PM",
    detail:
      "Get Ready for the Exciting Announcement of Winners and the Distribution of Prizes, Recognizing the Outstanding Efforts of Participants!",
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#000",
      color: "#fff",
      zIndex: 100,
    }}
    contentArrowStyle={{ borderRight: "7px solid #fff", zIndex: 100 }}
    date={experience.day}
    iconStyle={{ background: "#FFFFFF" }}
  >
    <div>
      <h3 className="text-white text-[20px] md:text-[24px] font-bold">
        {experience.title}
      </h3>
    </div>
    <div className="text-white md:text-sm font-normal">{experience.detail}</div>
  </VerticalTimelineElement>
);

function TimeLine() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div className="relative" id="timeline">
      <div className="bg-black p-8 w-full z-50">
        <motion.div className="text-white" variants={textVariant()}>
          <h2 className={styles.sectionHeadText + " text-center"}>SCHEDULE</h2>
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
        className="h-full  top-0 w-full dark:border dark:border-white/[0.1] absolute overflow-clip "
        ref={ref}
      >
        {/* <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        /> */}
      </div>
    </div>
  );
}

export default TimeLine;
