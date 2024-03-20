import React from "react";
import "./winner.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
function Winnercard({ title, description, runner }) {
  return (
    <CardContainer className=" w-80 sm:w-96 max-h-44 sm:h-36 my-3 flex mx-5 border rounded-lg bg-[rgb(255 255 255 / 70%)] border-white/[0.2]">
      <CardBody className="innertextprize h-full justify-center items-center rounded-lg" >
        <CardItem className="w-full h-full flex-col justify-center items-center" translateZ="50">
          <h1 className="text-2xl font-bold h-1/3 py-2 sm:py-0 flex mx-3 items-center text-white">
            {title}
          </h1>
          <div className="">
            <p className="mx-3 mb-1 text-white">{description}</p>
            {runner && (
              <p className=" text-gray-400 h-20 text-xs mx-3 ">
                *Runner-up awarded only if solution meets predefined criteria
              </p>
            )}
          </div>
        </CardItem>
      </CardBody>
      <CardItem className="imageprize rounded-lg flex justify-center items-center" translateZ="50">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trophy_Flat_Icon.svg/1024px-Trophy_Flat_Icon.svg.png"
          className=" h-20 w-20 group-hover/card:shadow-xl"
          alt=""
          srcset=""
        />
      </CardItem>
    </CardContainer>
  );
}

export default Winnercard;
