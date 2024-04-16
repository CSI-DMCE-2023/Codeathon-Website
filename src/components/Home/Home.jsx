import React, { useState, useEffect, lazy } from "react";
import dayjs from "dayjs";
import "./home.css";
import "./Button.css";
const Spline = lazy(() => import("@splinetool/react-spline"));

const CountdownTimer = () => {
  const targetDate = dayjs("2024-04-19T10:00:00");

  const calculateTimeLeft = () => {
    const now = dayjs();
    const difference = targetDate.diff(now);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: targetDate.diff(now, "day"),
        hours: targetDate.diff(now, "hour") % 24,
        minutes: targetDate.diff(now, "minute") % 60,
        // seconds: targetDate.diff(now, 'second') % 60
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
    <div className="max-w-lg sm:text-3xl text-md font-extrabold leading-normal timelinebutton mt-6 capitalize text-white">
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
          <div className="flex justify-center items-center w-full absolute bottom-[20%] sm:bottom-[15%]">
            <a href="#shortlisted-teams">
              <button className="btn w-auto">Final Results are live </button>
            </a>
          </div>
          <div className="flex justify-center items-center w-full absolute bottom-[11%] sm:bottom-[8%]">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
