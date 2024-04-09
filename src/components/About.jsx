import React from "react";
import Instagram from "../assets/icons/instagram.png";
import Wordpress from "../assets/icons/wordpress.png";

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
          <div className="flex gap-x-6">
            <a href="https://www.instagram.com/logithon.ai/" target="_blank">
              <img
                src={Instagram}
                alt="instagram"
                className="size-8 sm:size-9"
              />
            </a>
            <a href="https://logithon.wordpress.com/" target="_blank">
              <img
                src={Wordpress}
                alt="wordpress"
                className="size-8 sm:size-9"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={"https://res.cloudinary.com/dbeptj8fp/image/upload/v1712648594/hackathon/rwdnltlhujoxngho2gpi.png"}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={"https://res.cloudinary.com/dbeptj8fp/image/upload/v1712648594/hackathon/mc2l4s2jbmllcpdnfjsu.png"}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
