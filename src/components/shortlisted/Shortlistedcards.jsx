import React from "react";
import { CardContainer, CardItem } from "../../ui/3d-card";
import "./shortlist.css";
function Shortlistedcards({ teamname }) {
  console.log(teamname);
  return (
    <CardContainer className="w-64 h-16 my-1 maincard rounded-md border hover:shadow-2xl hover:shadow-gray-500/[0.1] bg-black border-white/[0.2]">
      <CardItem translateZ="100">
        <h3 className="text-white font-bold text-center teamname text-lg px-2">{teamname.teamname}</h3>
        <h3 className="text-white font-bold text-center teamlead text-lg px-2">{teamname.teamlead}</h3>
      </CardItem>
    </CardContainer>
  );
}

export default Shortlistedcards;
