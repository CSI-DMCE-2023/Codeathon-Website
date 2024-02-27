import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import rocket from '../assets/withoutfire.png'; // Import your rocket image without fire
import rocketWithFire from '../assets/rocke-removebg-preview.png'; // Import your rocket image with fire
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function GoToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const rocketRef = useRef(null);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        setIsClicked(true);
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: 0, autoKill: false }, // Scroll to top using GSAP's scrollTo plugin
          onComplete: () => {
            gsap.to(rocketRef.current, {
              duration: 1,
              y: '-100px', // Move the rocket upwards by 100px
              onComplete: () => {
                gsap.to(rocketRef.current, {
                  duration: 1,
                  y: 0, // Move the rocket back to its original position
                  onComplete: () => setIsClicked(false)
                });
              }
            });
          }
        });
      };
      


    useEffect(() => {
        if (isClicked) {
            // Animation using GSAP
            gsap.to(rocketRef.current, { duration: 2, ease: "power2.out", onComplete: () => setIsClicked(false) });
        }
    }, [isClicked]);

    return (
        <div className='z-50'>

            (
            <img
                className='z-50'
                src={isClicked ? rocketWithFire : rocket}
                alt="Rocket"
                onClick={scrollToTop}
                ref={rocketRef}
                style={{ width: '50px', height: '50px', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
            />
            )
        </div>
    );
}

export default GoToTopBtn;
