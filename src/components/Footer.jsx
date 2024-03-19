// import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
// import LinkedIn from "../assets/icons/linkedin.png";
// import Instagram from "../assets/icons/instagram.png";
// import Discord from "../assets/icons/discord.png";

const Footer = () => {
  return (
    <div className="bg-black text-white px-2 mt-8 sm:mt-12">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="gap-y-4 py-4 flex flex-col justify-center items-center"
      >
        <div className="flex gap-x-6">
        {/* <a href="/" target="_blank">
            <img src={LinkedIn} alt="linkedin" className="size-8 sm:size-9" />
          </a> */}
          <a href="https://www.instagram.com/logithon.ai?igsh=Y3oyeDZiM2J6bnh5&utm_source=qr" target="_blank">
            <img src={Instagram} alt="instagram" className="size-8 sm:size-9" />
          </a>
        {/* <a href="/" target="_blank">
            <img src={Discord} alt="discord" className="size-8 sm:size-9" />
          </a> */}
        </div>
        <p className="text-xs sm:text-sm font-light">
          LogiTHON 2024 | All Rights Are Reserved
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
