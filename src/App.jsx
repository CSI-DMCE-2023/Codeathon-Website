import "./App.css";

import About from "./components/About";
import GoToTopBtn from "./goToTopBtn/GoToTopBtn";

import { Home } from "./Home/Home";
import { Sponcers } from "./sponcers/Sponcers.jsx";

import Navbar from "./Navbar/Navbar";

import { TimeLine } from "./TimeLine/TimeLine";
import { Gallery } from "./Gallery/Gallery";
import Footer from "./footer/Footer";
import Faq from "./FAQ/Faq";
import { useEffect, useState } from "react";
import PreLoader from "./preloader/PreLoader.jsx";
import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import Winner from "./Winner/Winner.jsx";
import MainDomain from "./components/MainDomain.jsx";



function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [loading, setLoading] = useState(true);
 


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
    }, 3000);

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
              height: "4px",
              background: "linear-gradient(145deg, #9fccfa, #0974f1)",
              borderRadius: "300px",
              transformOrigin: "0%",
              zIndex: 1000,
              scaleX,
            }}
          />
          <Navbar />


          <Home />

          {/* <div className="w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 ">
            <About />
          </div> */}
          <MainDomain/>

         
          


            <TimeLine />
            <Winner/>
            <Gallery />
            <Sponcers />
            <GoToTopBtn />
           <Faq/>
            <Contact />
            <Footer />
           
          </>
          )}
    </div>
  );
}

export default App;