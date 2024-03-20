import React from "react";
import "./winner.css";
function Winnercard({ title, description, runner }) {
  return (
    <div className=" w-80 sm:w-96 max-h-40 my-3 flex mx-5 border rounded-lg bg-black border-white/[0.2]">
      <div className="innertextprize rounded-lg">
        <div className="w-full h-full flex-col justify-center items-center">
          <h1 className="text-2xl font-bold h-1/3 flex mx-3 items-center text-white">
            {title}
          </h1>
          <div className="h-auto">
            <p className="mx-3 mb-1 text-white">{description}</p>
            {runner && (
              <p className=" text-gray-400 h-20 text-xs mx-3 ">
                *Runner-up awarded only if solution meets predefined criteria
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="imageprize rounded-lg flex justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trophy_Flat_Icon.svg/1024px-Trophy_Flat_Icon.svg.png"
          className=" h-20 w-20"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Winnercard;
