import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import dmcelogo from "../assets/dmce.png";
import csi from "../assets/logo.png";
import softlink from "../assets/Softlink.png";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import brochure from "../assets/Brochure.pdf";
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
    <>
      <header class="fixed inset-x-0 top-0 z-[200] mx-auto w-full max-w-screen-md border border-gray-100 bg-[rgb(15 23 42 / 70%)] py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg text-white">
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              {/* <a aria-current="page" class="fl/ex items-center" href="/"> */}
              <a href="https://dmce.ac.in/" target="_blank">
                <img
                  class="h-10 object-cover mx-4 sm:h-10 w-auto"
                  src={dmcelogo}
                  alt=""
                />
              </a>
              <a href="https://softlinkglobal.com/" target="_blank">
                <img
                  class="h-10 object-cover sm:h-10 sm:mx-4 w-auto"
                  src={softlink}
                  alt=""
                />
              </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              <button
                class=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => scrollToTimeline("prizes")}
              >
                PRIZES
              </button>
              <button
                aria-current="page"
                class=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => scrollToTimeline("domains")}
              >
                {" "}
                PROBLEM STATEMENTS
              </button>

              <button
                class=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => scrollToTimeline("gallery")}
              >
                GALLERY
              </button>
              <button
                class=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => scrollToTimeline("faqs")}
              >
                FAQS
              </button>
              <button
                class=" cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => scrollToTimeline("cantact")}
              >
                CONTACT
              </button>
            </div>
            <div class="flex items-center justify-end gap-3">
              <a
                href={brochure}  
                download="SoftlinkLogithon"
                id="downloadLink"
                target="_blank"
                onClick={handlebrochure}
                class=" cursor-pointer items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-black hover:text-white sm:inline-flex"
              >
                Brochure
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="w-full h-full ">
        <div className="w-full max-md:p-4 p-8 bg-black  h-[80px] flex items-center justify-between">
          <div className="w-[35vw] h-full flex gap-4 items-center">
            <img
              className="img-fluid w-[3rem] h-[3rem] md:w-16 md:h-16 navcontent"
              src={dmcelogo}
              alt="dmceLOGO"
            />
            <img
              className="img-fluid  w-[20rem] h-[3rem] md:w-48 object-cover md:h-16 navcontent"
              src={softlink}
              alt="csi logo"
            />
          </div>
          {side === true ? (
            <div
              onClick={toggle}
              className=" w-[3rem] h-[3rem] md:w-16 md:h-16 z-[110] text-white navcontent cursor-pointer"
            >
              <MenuIcon fontSize="large" />
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className={
            "w-full md:w-[40%] top-0 right-0 transition-all md:border-l-4 border-blue-700 duration-200 fixed z-[100] h-[110%] bg-black text-white p-8 md:pl-16 " +
            (side === false
              ? " translate-x-0 "
              : " translate-x-[100%] pointer-events-none")
          }
        >
          <div
            onClick={toggle}
            className={
              " p-6 max-md:p-1 max-md:py-5 bg-blue-600 border-4 border-blue-700 top-[40%] -left-10 py-10 flex items-center justify-center rounded-full md:absolute   h-8 cursor-pointer w-fit " +
              (side === false ? " block " : " hidden ")
            }
          >
            <CloseIcon fontSize="large" />
          </div>
          <div className="w-full mx-auto sidebar h-auto mt-8 flex gap-6 flex-col justify-center items-center text-2xl z-50">

            <button
              onClick={() => scrollToTimeline("domains")}
              className="p-2 cursor-pointer   border-b-4 sidepara2 border-blue-700 w-full text-center"
            >
              PROBLEM STATEMENTS
            </button>
            <button
              onClick={() => scrollToTimeline("timeline")}
              className="p-2  border-b-4 sidepara2 border-blue-700 w-full text-center"
            >
              SCHEDULE
            </button>
            <button
              onClick={() => scrollToTimeline("prizes")}
              className="p-2  cursor-pointer  border-b-4 sidepara3  border-blue-700 w-full text-center"
            >
              PRIZES
            </button>
            <button
              onClick={() => scrollToTimeline("gallery")}
              className="p-2  cursor-pointer  border-b-4 sidepara4  border-blue-700 w-full text-center"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToTimeline("faqs")}
              className="p-2  cursor-pointer  border-b-4 sidepara5  border-blue-700 w-full text-center"
            >
              FAQS
            </button>
            <button
              onClick={() => scrollToTimeline("cantact")}
              className="p-2  cursor-pointer  border-b-4 sidepara5  border-blue-700 w-full text-center"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
