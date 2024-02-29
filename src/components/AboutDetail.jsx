import CSI_video from "../assets/csi.mp4";
import "./AboutDetails.css";
import React, { useRef, useEffect, useState } from "react";
// import CsiDesc from "./CsiDesc";
function AboutDetail() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      if (isInViewport(videoElement) && !isPlaying) {
        setIsPlaying(true);
        videoElement.play();
      }
    };

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <div className="w-full h-full  max-md:flex-col-reverse  md:p-8 p-2  ">
      <div className=" w-full mx-auto md:w-1/2 h-1/3  md:p-20 max-md:py-16 ">
        <div class="mob-video w-[90%] md:w-[70%] ">
          <div class="btn1"></div>
          <div class="btn2"></div>
          <div class="btn3"></div>
          <div class="btn4"></div>
          <div class="mob-int relative border">
            <video
              ref={videoRef}
              className="CSI_Video absolute border object-cover"
              controls
              autoPlay
              loop
              muted
            >
              <source src={CSI_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="top">
            <div class="camera">
              <div class="int"></div>
            </div>
            <div class="speaker"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutDetail;
