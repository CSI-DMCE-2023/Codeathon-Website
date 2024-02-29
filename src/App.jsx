import "./App.css";

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
import Lenis from '@studio-freight/lenis'

function App() {

  const [loading, setLoading] = useState(true);
  const cursor = document.getElementById("cursor");
  const stalker = document.getElementById("stalker");
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    stalker.style.transform = `translate(${x}px, ${y}px)`;
  });


  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate content loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {
        loading ? <PreLoader />
          :
          <>

            <div id="cursor"></div>
            <div id="stalker"></div>

            <Navbar />
            <Home />

            <div className="w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 ">
              <About />
            </div>

            <TimeLine />
            <Gallery />
            <Sponcers />
            <GoToTopBtn />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
