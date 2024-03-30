import React from "react";
import { CardContainer, CardItem } from "../../ui/3d-card";

function Shortlistedcards({ teamname }) {
  return (
    <CardContainer className="w-48 h-16 rounded-md border hover:shadow-2xl hover:shadow-gray-500/[0.1] bg-black border-white/[0.4]">
      <CardItem translateZ="100">
        <h3 className="text-white font-bold">{teamname}</h3>
      </CardItem>
    </CardContainer>
  );
}

export default Shortlistedcards;
