import CSI_video from "../assets/csi.mp4"
import "./AboutDetails.css"
import React, { useRef, useEffect, useState } from 'react';
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
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  return (

    <div className="w-full h-full  max-md:flex-col-reverse flex  justify-center items-center md:p-8 p-2 ">
      <div className=" w-full mx-auto md:w-1/2 h-1/3  md:p-20 max-md:py-16 ">
        <div class="mob-video max-md:mx-auto">
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

      <div className="md:w-1/2 w-full ">
        <h1 className="text-sky-400 text-5xl max-md:text-3xl font-extrabold mb-10 text-center">What is Code-a-thon?</h1>

        <div class="About-card h-auto">
          <p  className="max-sm:text-sm md:font-bold" >Codeathon is a 24-hour hackathon taking place in Datta Meghe  College of Engineering, Airoli, on the 09 and 10 of march 2024.
            Our hackathon brings talented and ambitious students from all over India together to collaborate and create innovative solutions to real-world problems.
            Students can register in groups of 2-4 people. The hackathon is going to be conducted in 2 rounds.
            First, all the registered participants will submit their resumes, which will be screened by a qualified team on our end and shortlisted. The teams that move on to round 2 will be invited to the offline hackathon happening on campus, where they will have 24 hours to build a prototype for their chosen problem statement.
            Arrangements will be made for refreshments, resting, and recreational activities for our participants.
          </p>
        </div>

      </div>
    </div>

  )
}
export default AboutDetail;