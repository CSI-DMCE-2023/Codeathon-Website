import React, { useEffect } from "react";
import dmcelogo from "../assets/dmce.png";
import csi from "../assets/logo.png";
import './navbar.css'
const Navbar = () => {

    useEffect(() => {

        const tl = gsap.timeline();

        gsap.set('.navcontent', {
            opacity: 0,
            scale: 0,
            stagger: 0.3,
        })
        gsap.to('.navcontent', {
            opacity: 1,
            scale: 1,
            stagger: 0.3,
            delay: 4
        })

    }, [])
    return (
        <div className="w-full p-4 bg-black  h-[80px] flex items-center justify-between">
            <div className="w-[20vw] h-full flex gap-4 items-center">

                <img className="img-fluid w-[3rem] h-[3rem] md:w-16 md:h-16 navcontent" src={dmcelogo} alt="dmceLOGO" />

                <img className="img-fluid  w-[3rem] h-[3rem] md:w-16 md:h-16 navcontent" src={csi} alt="csi logo" />

            </div>
            <div className="m-4 w-[3rem] h-[3rem] md:w-16 md:h-16 text-white navcontent">
                <input id="checkbox" type="checkbox" />
                <label class="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
