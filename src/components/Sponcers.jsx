import React from "react";
import mtpo from "../assets/matpo.png"
import sponcer2 from "../assets/sponcer2.jpeg"
import sponcer3 from "../assets/sponcer3.webp"
function Sponcers() {
  return (
    <div class="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
      <p class="w-full mb-4 -mt-4 uppercase text-3xl md:text-5xl text-white font-semibold text-center">
        Associate Partner
      </p>

      <a
        class="flex items-center justify-center text-gray-400 hover:text-gray-200"
        href="https://ploi.io"
        target="_blank"
        title="Ploi"
      >
        <img className="w-48 h-48 object-contain" src="https://meghaengg.ac.in/wp-content/uploads/2022/01/Iste.png" alt="" srcset="" />
      </a>

      <a
        class="flex items-center justify-center text-gray-400 hover:text-gray-200"
        href="https://www.agiledrop.com/laravel?utm_source=filament"
        target="_blank"
        title="Agiledrop"
      >
         <img className="w-48 h-48 object-contain" src={mtpo} alt="" srcset="" />
      </a>

      <a
        class="flex items-center justify-center text-gray-400 hover:text-gray-200"
        href="https://codecourse.com"
        target="_blank"
        title="Codecourse"
      >
         <img className="w-48 h-48 object-contain" src={sponcer2} alt="" srcset="" />
      </a>

      <a
        class="flex items-center justify-center text-gray-400 hover:text-gray-200"
        href="https://laradir.com"
        target="_blank"
        title="Laradir"
      >
         <img className="w-48 h-48 object-contain" src={sponcer3} alt="" srcset="" />
      </a>
    </div>
  );
}

export default Sponcers;
