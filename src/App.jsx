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
import Contact from "./components/Contact";
// import Spline from "./components/spline.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <Navbar />
          <Home />

          <div className="w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 ">
            <About />
          </div>

          <TimeLine />
          <Gallery />
          <Sponcers />
          <GoToTopBtn />
          <Contact/>
          <Footer />
          {/* <Spline /> */}
        </>
      )}
    </div>
  );
}

export default App;
