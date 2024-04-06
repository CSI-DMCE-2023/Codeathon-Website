import React from "react";
import "./home.css";
// import { StarsCanvas } from "../spline";
import "./Button.css";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export function Home({ setLogoLoader }) {
  const scrollToTimeline = (e) => {
    const timelineSection = document.getElementById(e);
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="vanta2" className="h-screen bg-black">
      <div className="h-screen w-full flex items-center justify-center  overflow-hidden flex-col vanta overflow-x-hidden bg-black bg-grid-white/[0.2] relative ">
        {/* <StarsCanvas /> */}
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
          <a onClick={() => scrollToTimeline("shortlisted-teams")} className=" flex justify-center items-center absolute sm:left-[43%] left-[15%]  bottom-[20%] sm:bottom-[15%]">
            <button className="btn w-auto">Round 1 Results are live </button>
          </a>
        </div>
      </div>
    </div>
  );
}
