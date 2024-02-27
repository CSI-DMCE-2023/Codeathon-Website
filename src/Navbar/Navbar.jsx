import React, { useEffect, useState } from "react";
import dmcelogo from "../assets/dmce.png";
import csi from "../assets/logo.png";
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {

    useEffect(() => {

        //const tl = gsap.timeline();

        // gsap.set('.navcontent', {
        //     opacity: 0,
        //     scale: 0,
        //     stagger: 0.3,
        // })
        // gsap.to('.navcontent', {
        //     opacity: 1,
        //     scale: 1,
        //     stagger: 0.3,
        //     delay: 4
        // })

    }, [])


    const timeLine = () => {
        const tl = gsap.timeline();
        gsap.set('.sidebar p ' , {
            opacity : 0,
            scale : 0
        })

        gsap.to('.sidebar p', {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger : 0.3

        })
        // .from('.sidepara2', {
        //         opacity: 0,
        //         duration: 0.3,

        //     }).from('.sidepara3', {
        //         opacity: 0,
        //         duration: 0.3,
        //     }).from('.sidepara4', {
        //         opacity: 0,
        //         duration: 0.3,
        //     }).from('.sidepara5', {
        //         opacity: 0,
        //         duration: 0.3,
        //     })

    }

    const [side, setSide] = useState(true)

    const toggle = () => {
        timeLine()
        setSide(prevSide => !prevSide)
        console.log(side);
    }

    return (
        <>
            <div className="w-screen p-4 bg-black  h-[80px] flex items-center justify-between">
                <div className="w-[20vw] h-full flex gap-4 items-center">

                    <img className="img-fluid w-[3rem] h-[3rem] md:w-16 md:h-16 navcontent" src={dmcelogo} alt="dmceLOGO" />

                    <img className="img-fluid  w-[3rem] h-[3rem] md:w-16 md:h-16 navcontent" src={csi} alt="csi logo" />

                </div>
                <div onClick={toggle} className="m-4 w-[3rem] h-[3rem] md:w-16 md:h-16 text-white navcontent cursor-pointer">
                    <MenuIcon fontSize="large" />

                </div>
            </div>
            <div className={"w-full top-0 transition-all duration-200  absolute z-50 h-[110%] bg-black text-white p-8 " + (side === false ? " translate-x-0 " : " translate-x-[100%]")}>
                <div className="w-full p-2 h-8 cursor-pointer">
                    <CloseIcon fontSize="large" onClick={toggle} />
                </div>

                <div className="w-[96%] sidebar h-auto mt-8 flex gap-4 flex-col justify-center items-center text-2xl">

                    <p className="p-2  border-b-4 sidepara1 border-blue-700 w-full text-center">Home</p>
                    <p className="p-2  border-b-4 sidepara2 border-blue-700 w-full text-center">About</p>
                    <p className="p-2  border-b-4 sidepara3  border-blue-700 w-full text-center">Schedule</p>
                    <p className="p-2  border-b-4 sidepara4  border-blue-700 w-full text-center">Gallery</p>
                    <p className="p-2  border-b-4 sidepara5  border-blue-700 w-full text-center">Contact</p>
                </div>



            </div>

        </>

    );
};

export default Navbar;
