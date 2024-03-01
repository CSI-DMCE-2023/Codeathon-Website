import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import logoImage from '../assets/clearLogo.png'; // Path to your logo image


const PreLoader = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        gsap.set('#logo', {
            opacity: 0,
            scale: 0
        })
        gsap.set('#loading', {
            opacity: 0,
            scale: 0
        })

        tl.to("#logo", {
            delay:0.3,
            opacity: 1,
            scale: 1,
            duration: 1,
            rotate : 360,
            ease: "Power3.easeOut"
        })
            .to("#loading", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "Power3.easeOut"
            })


    }, []);

    return (
        <div className="preloader p-4 md:p-8 fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-8 bg-black overflow-hidden z-50">
            <img id='logo' className='w-[30%] max-md:w-[40%] aspect-square' src={logoImage} alt="logo" />
            <h1 id='loading' className="text-white mx-auto text-4xl font-bold text-center max-md:text-2xl   ">Lets Develope Something Unique</h1>
        </div>

    );
};

export default PreLoader;
