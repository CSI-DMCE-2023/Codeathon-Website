import React, { useState, useEffect, lazy } from "react";
import "./home.css";
import "./Button.css";
const Spline = lazy(() => import("@splinetool/react-spline"));

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-18") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-white text-xl capitalize font-semibold">
      {timerComponents.length ? timerComponents : <span></span>}
    </div>
  );
};

export default function Home({ setLogoLoader }) {
  return (
    <div id="vanta2" className="h-screen bg-black">
      <div className="h-screen w-full flex items-center justify-center  overflow-hidden flex-col vanta overflow-x-hidden bg-black bg-grid-white/[0.2] relative ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex-col w-full h-full justify-center items-center z-50">
          <Spline
            className=" scale-50 md:scale-150 md:w-full w-[190%] -m-[50%] mt-32 sm:ml-0 bg-slate-50"
            style={{
              height: "50%",
              width: "revert-layer",
              background: "transparent",
            }}
            scene="https://prod.spline.design/spV0nxuwKVr2DtBf/scene.splinecode"
            onLoad={() => setLogoLoader(false)}
          />
          <a
            href="#shortlisted-teams"
            className="flex justify-center items-center absolute sm:left-[43%] left-[15%] bottom-[20%] sm:bottom-[15%]"
          >
            <button className="btn w-auto">Final Results are live </button>
          </a>
          <div className="flex justify-center items-center absolute sm:left-[43%] left-[15%] bottom-[11%] sm:bottom-[8%]">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
