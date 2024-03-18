import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn } from "../varients";
import "./winner.css";

const Winner = () => {
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".counts").forEach(element => {
    let clean = v => (v + "").replace(/[^\d\.-]/gi, "");
    let num = clean(element.getAttribute("data-number"));
    let decimals = (num.split(".")[1] || "").length;
    let proxy = { val: 0 };

    gsap.to(proxy, {
      val: +num,
      duration: 2,
      scrollTrigger: {
        trigger: element,
        start: "top center", // Trigger animation when the top of the element hits the center of the viewport
        toggleActions: "restart none none none"
      },
      onUpdate: () => (element.innerText = formatNumber(proxy.val, decimals))
    });
  });

  function formatNumber(value, decimals) {
    let s = (+value).toLocaleString("en-US").split(".");
    return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
  }
}, []);
 // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div id="prizes" className="relative w-full max-h-screen mb-20 p-8 pb-8">
      <div className="w-full h-full flex items-center justify-center z-40">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white mx-auto text-4xl sm:text-6xl md:text-8xl font-bold"
        >
          PRIZE POOL
        </motion.h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 my-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full h-full flex items-center justify-center flex-col"
        >
          <p
            data-number="600000"
            className="counts number medium-slow text text-center sm:text-5xl text-4xl md:text-7xl font-bold -m-8 mt-12 text-cyan-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            600000
          </p>
          <div className=" h-full text-white max-md:my-8">
            <div className="w-full h-full flex flex-col items-center justify-center gap-8 text-xl font-md mt-[3.5rem]">
              <p className="text-2xl">
                *Prize awarded only if solution meets evaluation criteria.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Winner;
