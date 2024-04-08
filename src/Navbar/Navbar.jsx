import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import dmcelogo from "../assets/dmce.png";
import csi from "../assets/logo.png";
import softlink from "../assets/Softlink.png";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import brochure from "../assets/LogithonBrochure.pdf";
const Navbar = () => {
  // const timeLine = () => {
  //   const tl = gsap.timeline();
  //   gsap.set(".sidebar button ", {
  //     opacity: 0,
  //     scale: 0,
  //   });

  //   tl.to(".sidebar button", {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 0.3,
  //     stagger: 0.3,
  //   });
  // };

  // const [side, setSide] = useState(true);

  // const toggle = () => {
  //   timeLine();
  //   setSide((prevSide) => !prevSide);
  //   console.log(side);
  // };
  const scrollToTimeline = (e) => {
    const timelineSection = document.getElementById(e);
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlebrochure = () => {
    var newFilename = "Softlink_Logithon";
    var downloadLink = document.getElementById("downloadLink");

    if (downloadLink) {
      downloadLink.setAttribute("download", newFilename);
    }
  };
  return (
    <header className="fixed inset-x-0 top-0 z-[200] mx-auto w-full max-w-screen-lg border border-gray-100 bg-[rgb(15 23 42 / 70%)] py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl text-white ">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a href="https://dmce.ac.in/" target="_blank">
              <img
                className="h-10 object-cover mx-4 sm:h-10 w-auto"
                src={dmcelogo}
                alt=""
              />
            </a>
            <a href="https://softlinkglobal.com/" target="_blank">
              <img
                className="h-10 object-cover sm:h-10 sm:mx-4 w-auto"
                src={softlink}
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <button
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("prizes")}
            >
              PRIZES
            </button>
            <button
              aria-current="page"
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("domains")}
            >
              PROBLEM STATEMENTS
            </button>
            <button
              aria-current="page"
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("shortlisted-teams")}
            >
              RESULT
            </button>
            <button
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("gallery")}
            >
              GALLERY
            </button>
            <button
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("blogs")}
            >
              BLOGS
            </button>
            <button
              className=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => scrollToTimeline("cantact")}
            >
              CONTACT
            </button>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              href={brochure}
              download="SoftlinkLogithon"
              id="downloadLink"
              target="_blank"
              onClick={handlebrochure}
              className=" cursor-pointer items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-black hover:text-white sm:inline-flex"
            >
              Brochure
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
