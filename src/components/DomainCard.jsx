// function Domain() {

//   return (
//     <>

//       <p className="text-sky-400 text-5xl font-extrabold mt-10">Domains</p>
//       <div class="container">
//         <div class="card">
//           <div class="Box">
//           <h2>SMART AUTOMATION</h2>
//             {/* <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
//           </div>
//           <div class="details">
//             <h2>SMART AUTOMATION</h2>
//             {/* <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
//           </div>
//         </div>
//         <div class="card">
//           <div class="Box">
//             {/* <img src="https://images.pexels.com/photos/3699319/pexels-photo-3699319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
//           </div>
//           <div class="details">
//             <h2>SOCIAL IMPACT</h2>
//             {/* <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
//           </div>
//         </div>
//         <div class="card">
//           <div class="Box">
//             {/* <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
//           </div>
//           <div class="details">
//             <h2>FINTECH</h2>
//             {/* <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
//           </div>
//         </div>
//         <div class="card">
//           <div class="Box">
//             {/* <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
//           </div>
//           <div class="details">
//             <h2>SUSUTAIABLE DEVELOPMENT</h2>
//             {/* <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
//           </div>
//         </div>
//       </div>

//     </>
//   )
// };

// export default Domain;

// import React from 'react';
import "./DomainCard.css";
import SmartAutomation from "../assets/smartAutomation.mp4";
import Fintech from "../assets/Fintech.mp4";
import SocialImpact from "../assets/SocialImpact.mp4";
import SustainableDev from "../assets/SustainableDevelopment.mp4";
import React, { useRef, useEffect, useState } from "react";
import { fadeIn } from "../varients";
import { motion } from 'framer-motion'
function DomainCard() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      if (isInViewport(videoElement) && !isPlaying) {
        setIsPlaying(true);
        videoElement.play();
      }
    };

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <main className="main w-full h-auto flex items-center justify-center max-md:flex-col">
      <motion.div variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <section className="card-area max-sm:pointer-events-none">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      {/* <img src="city_image_url" alt="City" className="card-front__icon" /> */}
                      <h2 className="card-front__heading">SMART AUTOMATION</h2>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <img src="city_back_image_url" alt="City Back" className="card-back__image" /> */}
                    <video
                      ref={videoRef}
                      className="SmartAutomation absolute border object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={SmartAutomation} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    SMART AUTOMATION
                  </h3>
                  <p className="inside-page__text">
                    As cities never sleep, there are always something going on, no
                    matter what time!
                  </p>
                  <a href="#" className="inside-page__btn inside-page__btn--city">
                    View deals
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Add more card sections similarly */}
        </section>
        <section className="card-area max-sm:pointer-events-none">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      {/* <img src="city_image_url" alt="City" className="card-front__icon" /> */}
                      <h2 className="card-front__heading">FINTECH</h2>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <img src="city_back_image_url" alt="City Back" className="card-back__image" /> */}
                    <video
                      ref={videoRef}
                      className="Fintech absolute border object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={Fintech} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    FINTECH
                  </h3>
                  <p className="inside-page__text">
                    As cities never sleep, there are always something going on, no
                    matter what time!
                  </p>
                  <a href="#" className="inside-page__btn inside-page__btn--city">
                    View deals
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Add more card sections similarly */}
        </section>
      </motion.div>
      <motion.div variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <section className="card-area max-sm:pointer-events-none">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      {/* <img src="city_image_url" alt="City" className="card-front__icon" /> */}
                      <h2 className="card-front__heading">SOCIAL IMPACT</h2>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <img src="city_back_image_url" alt="City Back" className="card-back__image" /> */}
                    <video
                      ref={videoRef}
                      className="SocialImpact absolute border object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={SocialImpact} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    SOCIAL IMPACT
                  </h3>
                  <p className="inside-page__text">
                    As cities never sleep, there are always something going on, no
                    matter what time!
                  </p>
                  <a href="#" className="inside-page__btn inside-page__btn--city">
                    View deals
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Add more card sections similarly */}
        </section>
        <section className="card-area max-sm:pointer-events-none">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      {/* <img src="city_image_url" alt="City" className="card-front__icon" /> */}
                      <h2 className="card-front__heading">
                        SUSTAINABLE DEVELOPMENT
                      </h2>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <img src="city_back_image_url" alt="City Back" className="card-back__image" /> */}
                    <video
                      ref={videoRef}
                      className="SustainableDev absolute border object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={SustainableDev} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    SUSTAINABLE DEVELOPMENT
                  </h3>
                  <p className="inside-page__text">
                    As cities never sleep, there are always something going on, no
                    matter what time!
                  </p>
                  <a href="#" className="inside-page__btn inside-page__btn--city">
                    View deals
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </main>
  );
}

export default DomainCard;
