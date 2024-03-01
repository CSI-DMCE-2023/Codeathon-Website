import "./App.css";

//import Scroll from "./Scroll.jsx";
import About from "./components/About";
import GoToTopBtn from "./goToTopBtn/GoToTopBtn";

import { Home } from "./Home/Home";
import { Sponcers } from "./sponcers/Sponcers.jsx";

import Navbar from "./Navbar/Navbar";

import { TimeLine } from "./TimeLine/TimeLine";
import { Gallery } from "./Gallery/Gallery";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./preloader/PreLoader.jsx";
import Contact from "./components/Contact";
// import Spline from "./components/spline.jsx";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import Winner from "./Winner/Winner.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [loading, setLoading] = useState(true);
  // const cursor = document.getElementById("cursor");
  // const stalker = document.getElementById("stalker");
  // document.addEventListener("mousemove", (event) => {
  //   const x = event.clientX;
  //   const y = event.clientY;
  //   cursor.style.transform = `translate(${x}px, ${y}px)`;
  //   stalker.style.transform = `translate(${x}px, ${y}px)`;
  // });


  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate content loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      {loading ? (
        <PreLoader />
      ) : (

        <>
          <motion.div
            className="progress-bar"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              background:"linear-gradient(145deg, #9fccfa, #0974f1)",
              borderRadius: "300px",
              transformOrigin: "0%",
              zIndex: 1000,
              scaleX,
            }}
          />
          <Navbar />


          <Home />

          <div className="w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 ">
            <About />
          </div>
          

            <TimeLine />
            <Winner/>
            <Gallery />
            <Sponcers />
            <GoToTopBtn />
            <Footer />
          </>
          )}
    </div>
  );
}

export default App;
