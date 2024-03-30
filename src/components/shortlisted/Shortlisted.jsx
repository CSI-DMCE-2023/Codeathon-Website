import React from "react";
import { CardContainer, CardItem } from "../../ui/3d-card";
import Shortlistedcards from "./Shortlistedcards";
const shortlistedteams = [
    "Team Ayush",
    "Team Beta",
    "Team Gamma",
    "Team Delta",
    "Team Epsilon",
    "Team Zeta",
    "Team Eta",
    "Team Theta",
    "Team Iota",
    "Team Kappa",
    "Team Lambda",
    "Team Mu",
    "Team Nu",
    "Team Xi",
    "Team Omicron",
    "Team Pi",
    "Team Rho",
    "Team Sigma",
    "Team Tau",
    "Team Upsilon",
    "Team Phi",
    "Team Chi",
    "Team Psi",
    "Team Omega",
    "Team Avenger",
    "Team Braveheart",
    "Team Crusaders",
    "Team Defenders",
    "Team Eagles",
    "Team Falcons",
    "Team Guardians",
    "Team Hawks",
    "Team Invincibles",
    "Team Jaguars",
    "Team Kingsmen",
    "Team Lions",
    "Team Mavericks",
    "Team Nomads",
    "Team Outlaws",
    "Team Panthers",
    "Team Questers",
    "Team Rangers",
    "Team Spartans",
    "Team Titans",
    "Team Unicorns",
    "Team Vikings",
    "Team Warriors",
    "Team X-Men",
    "Team Yankees",
    "Team Zealots",
    "Team All-Stars",
    "Team Blazers",
    "Team Champions",
    "Team Dominators",
    "Team Elite",
    "Team Firestorm",
    "Team Gladiators",
    "Team Heroes",
    "Team Gladiators",
    "Team Heroes",
];

function Shortlisted() {
    console.log(shortlistedteams.length)
  return (
    <>
    <h1 className="pb-10 text-3xl md:text-5xl text-white font-bold text-center z-[100]">
        SHORTLISTED TEAMS
      </h1>
    <div class="grid grid-cols-2 sm:grid-cols-6 gap-4">
      {shortlistedteams.map((teams,index)=>
      <Shortlistedcards teamname={teams}/>  )}
    </div>
    </>
  );
}

export default Shortlisted;
