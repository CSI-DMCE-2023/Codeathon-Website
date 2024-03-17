import "./App.css";

import GoToTopBtn from "./goToTopBtn/GoToTopBtn";

import { Home } from "./Home/Home";
import { Sponcers } from "./sponcers/Sponcers.jsx";

import Navbar from "./Navbar/Navbar";

import { TimeLine } from "./TimeLine/TimeLine";
import { Gallery } from "./Gallery/Gallery";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./preloader/PreLoader.jsx";
import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import Winner from "./Winner/Winner.jsx";
import MainDomain from "./components/MainDomain.jsx";
import FAQ from "./components/FAQ";
import { Analytics } from "@vercel/analytics/react";
import Marketing from "./marketing/Marketing.jsx";
import Domains from "./domain/Domain.jsx";
import ReactGA from "react-ga4";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [preLoader, setPreLoader] = useState(true);
  const [logoLoader, setLogoLoader] = useState(true);
  ReactGA.initialize("G-E0D9FS4JDP");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate content loading delay
    const timer = setTimeout(() => {
      setPreLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {(preLoader || logoLoader) && <PreLoader />}
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
      <Home setLogoLoader={setLogoLoader} />
      {/* <div className="w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 ">
            <About />
          </div> */}
      {/* <Domains /> */}
      <TimeLine />
      <Winner />
      <Marketing />
      <Gallery />
      {/* <Sponcers /> */}
      <FAQ />
      <GoToTopBtn />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
