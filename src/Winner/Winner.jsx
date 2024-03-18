import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./winner.css";

const Winner = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;

    if (!element) return;

    let clean = v => (v + "").replace(/[^\d\.-]/gi, "");
    let num = clean(element.getAttribute("data-number"));
    let decimals = (num.split(".")[1] || "").length;
    let proxy = { val: 0 };

    gsap.to(proxy, {
      val: +num,
      duration: 2,
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // Trigger animation when the top of the element hits the bottom of the viewport
        toggleActions: "restart none none none"
      },
      onUpdate: () => (element.innerText = formatNumber(proxy.val, decimals))
    });
  }, []);

  function formatNumber(value, decimals) {
    let s = (+value).toLocaleString("en-US").split(".");
    return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
  }

  return (
    <div id="prizes" className="relative w-full max-h-screen mb-20 p-8 pb-8">
      <div className="w-full h-full flex items-center justify-center z-40">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white mx-auto text-4xl sm:text-6xl md:text-8xl font-bold"
        >
          PRIZE POOL
        </motion.h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 my-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-full flex items-center justify-center flex-col"
        >
          <p
            ref={elementRef}
            data-number="600000"
            className="counts number medium-slow text text-center sm:text-5xl text-4xl md:text-7xl font-bold -m-8 mt-12 text-cyan-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            0
          </p>
          <div className=" h-full text-white max-md:my-8">
            <div className="w-full h-full flex flex-col items-center justify-center gap-8 text-xl font-md mt-[3.5rem]">
              <p className="text-xl text-center">
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
