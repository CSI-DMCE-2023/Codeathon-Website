import Domain from "./Domain"

import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col justify-start items-center gap-4">
            <h1 className="text-sky-400 text-5xl font-extrabold">About Code-a-thon</h1>
            <p className="w-[50%] text-slate-300 bg-slate-800 p-6 font-mono rounded-md font-extrabold text-xl">Codeathon is a 24-hour hackathon taking place in Datta Meghe  College of Engineering, Airoli, on the 09 and 10 of march 2024.
                Our hackathon brings talented and ambitious students from all over India together to collaborate and create innovative solutions to real-world problems.
                Students can register in groups of 2-4 people. The hackathon is going to be conducted in 2 rounds.
                First, all the registered participants will submit their resumes, which will be screened by a qualified team on our end and shortlisted. The teams that move on to round 2 will be invited to the offline hackathon happening on campus, where they will have 24 hours to build a prototype for their chosen problem statement.
                Arrangements will be made for refreshments, resting, and recreational activities for our participants.
            </p>
            <Domain/>
        </div>
    )
}

export default About
