import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";

import PS from "./components/ps/PS";
import TimeLine from "./components/TimeLine/TimeLine";
import Gallery from "./components/Gallery";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import Blog from "./components/Blog.jsx";
import Softlink from "./components/Softlink.jsx";
import About from "./components/About.jsx";
import Sponcers from "./components/Sponcers.jsx";
import GoToTopBtn from "./components/GoToTopBtn.jsx";
import PreLoader from "./components/PreLoader.jsx";
import Winner from "./components/Winner/Winner.jsx";
import Home from "./components/Home/Home.jsx";

import Shortlisted from "./components/shortlisted/Shortlisted.jsx";
import Teamshortsection from "./components/shortlisted/Teamshortsection.jsx";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [preLoader, setPreLoader] = useState(true);
  const [logoLoader, setLogoLoader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      <About />
      <Winner />
      <PS />
      <Teamshortsection />
      {/* <Shortlisted /> */}
      <TimeLine />
      <Softlink />
      <Gallery />
      <Sponcers />
      <Blog />
      <FAQs />
      <GoToTopBtn />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
