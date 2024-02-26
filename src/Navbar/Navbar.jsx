import React from "react";
import dmcelogo from "../assets/dmce.png";
import csi from "../assets/logo.png";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="w-full border  h-[80px] flex items-center justify-between">
            <div className="w-[20vw] h-full flex gap-4 items-center">

                <img className="img-fluid w-16 h-16" src={dmcelogo} alt="dmceLOGO" />

                <img className="img-fluid w-16 h-16" src={csi} alt="csi logo" />

            </div>
            <div className="m-4 text-white">
                <input id="checkbox" type="checkbox"/>
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
