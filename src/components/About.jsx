import React from "react";
import logithon from "../assets/LOGITHON.png"
import logistics from "../assets/logistics.webp"
import aboutimg from "../assets/aboutimg.png"
const About = () => {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            About LogiTHON
          </h2>
          <p className="mb-4 text-xl text-justify">
            Datta Meghe College of Engineering, in collaboration with Softlink
            Global Pvt. Ltd., hosts LogiTHON, a pioneering 24-hour hackathon
            merging technology with logistics. Participants from all backgrounds
            converge to devise innovative solutions for logistics challenges.
            With a focus on efficiency, sustainability, and social impact and
            mentorship. It reshapes the future of logistics through supply chain
            optimization and last-mile delivery revolution, fostering an
            ecosystem where ideas flourish and partnerships thrive.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={logithon} alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={aboutimg} alt="office content 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
