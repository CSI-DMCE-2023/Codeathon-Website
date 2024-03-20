import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { fadeIn } from "../varients";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./winner.css";
import { LampContainer } from "../components/ui/lamp";
import Winnercard from "./Winnercard";
const Winner = () => {
  let triggered = false;
  useEffect(() => {
    const element = document.getElementById("prizesdata");
    if (!element) {
      console.error("Element with ID 'prizesdata' not found.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: function () {
        const isInView = ScrollTrigger.isInViewport(element, 0.9, false);
        // console.log("Element in view:", isInView);

        if (isInView && !triggered) {
          updateValues();
          triggered = true;
          console.log("Values updated.");
        }
      },
    });
    function updateValues() {
      // if (
      //   ScrollTrigger.isInViewport(element, 0.2, true)
      // ) {
      console.log("letsss work");
      gsap.utils.toArray(".counts").forEach((element) => {
        let clean = (v) => (v + "").replace(/[^\d\.-]/gi, "");
        let num = clean(element.getAttribute("data-number"));
        let decimals = (num.split(".")[1] || "").length;
        let proxy = { val: 0 };

        gsap.to(proxy, {
          val: +num,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top center", // Trigger animation when the top of the element hits the center of the viewport
            toggleActions: "restart none none none",
            // once: true,
          },
          onUpdate: () =>
            (element.innerText = "₹" + formatNumber(proxy.val, decimals)),
        });
      });

      function formatNumber(value, decimals) {
        let s = (+value).toLocaleString("en-IN").split(".");
        return decimals
          ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
          : s[0];
      }
    }
    // }
  }, []);
  return (
    <div id="prizes" className="relative w-full max-h-screen sm:p-8 pb-8">
      <LampContainer>
        <div className="w-full  max-h-screen flex items-center justify-center z-40">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white mx-auto text-center text-4xl sm:text-6xl md:text-8xl font-bold"
          >
            CASH PRIZE POOL
          </motion.h1>
        </div>
        {/* <div className="w-full h-full grid grid-cols-1 my-4"> */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          // initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full h-full flex items-center justify-center flex-col"
        >
          <div
            id="prizesdata"
            data-number="600000"
            className=" font-mono counts w-full h-full number medium-slow text text-center text-5xl md:text-9xl font-bold mb-6 mt-12 text-cyan-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Rs 600000
          </div>
          <div className="flex flex-wrap justify-evenly mt-8">
            <Winnercard
              title={"Winner"}
              description={
                "Each Problem Statement Winner will receive 1,00,000 cash prize"
              }
              runner={false}
            />
            <Winnercard
              title={"First Runner-Up"}
              description={
                "Each Problem Statement's Runner-Up will receive 50,000 cash prize"
              }
              runner={true}
            />
            <Winnercard
              title={"PPO and Internships"}
              description={"PPO and Internships from Softlink Global Pvt. Ltd."}
              runner={false}
            />
          </div>
        </motion.div>
        {/* </div> */}
      </LampContainer>
    </div>
  );
};

export default Winner;
