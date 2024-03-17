import React from "react";
import "./home.css";
// import { StarsCanvas } from "../spline";
import "./Button.css";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export function Home({ setLogoLoader }) {
  return (
    <div id="vanta2" className="h-screen bg-black">
      <div className="h-screen w-full flex items-center justify-center  overflow-hidden flex-col vanta overflow-x-hidden">
        {/* <StarsCanvas /> */}
        <div className="flex-col w-full h-full z-50">
          <Spline
            className=" scale-50 md:scale-150 md:w-full w-[190%] -m-[50%] mt-20 sm:ml-0 bg-slate-50"
            style={{
              height: "50%",
              width: "revert-layer",
              background: "transparent",
            }}
            scene="https://prod.spline.design/eatze73xxFkdvtg8/scene.splinecode"
            onLoad={() => setLogoLoader(false)}
          />
          <div className="w-full flex justify-center items-center absolute bottom-[8%]">
            <button className="btn">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
