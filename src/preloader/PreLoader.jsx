import React, { useEffect } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
  //   useEffect(() => {
  //     const tl = gsap.timeline();

  //     gsap.set("#logo", {
  //       opacity: 0,
  //       scale: 0,
  //     });
  //     gsap.set("#loading", {
  //       opacity: 0,
  //       scale: 0,
  //     });
  //     gsap.set(".preloader", {
  //       height: "100%",
  //     });

  //     tl.to("#logo", {
  //       delay: 0.3,
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       // rotate : 360,
  //       ease: "Power3.easeOut",
  //     })
  //       .to("#loading", {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 1,
  //         ease: "Power3.easeOut",
  //       })
  //       .from(".preloader", {
  //         height: "100%",
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       });
  //   }, []);

  return (
    <div className="preloader z-[220] p-4 md:p-8 fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center flex-col gap-8 bg-black overflow-hidden">
      <section class="bg-blue-900 relative place-items-center grid w-full gap-4">
        <div class="bg-gray-500 w-44 h-44  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
        <div class="bg-gray-400 w-28 h-28 absolute animate-ping rounded-full shadow-xl"></div>
        <div class="bg-white w-20 h-20 absolute animate-pulse rounded-full shadow-xl"></div>
      </section>
      <div>
        <h2 class="text-center text-white text-xl font-semibold mt-32">
          Loading...
        </h2>
        <p class="text-center text-white mt-2">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
};

export default PreLoader;
