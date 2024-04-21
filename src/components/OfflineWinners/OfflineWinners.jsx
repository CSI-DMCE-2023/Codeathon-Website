import React from "react";
import janhavi from "../../assets/gallery/janhaviwinner.jpg";
import cybergirlism from "../../assets/gallery/cybergirlism.jpg"
import codegeass from "../../assets/gallery/codegeass.jpg"
import asapcoders from "../../assets/gallery/asapcoder.jpg"
import init from "../../assets/gallery/init.jpg"
import Recursives from "../../assets/gallery/recursives.jpg"
import hachbytes from "../../assets/gallery/hashbytes.jpg"
import nekox from "../../assets/gallery/nekox.jpg"
function OfflineWinners() {
  const winnersdata = [
    {
      problem: "Problem Statement 1",
      winnerTeamname: "Dataminers",
      winnerteamtext:
        "Team Cybergirlism from Amity University (AU), Mumbai Secured 1st Rank in Problem statement 1",
        winnerimg:cybergirlism,
      runnerupteamname: "Dash",
      runnerimg:codegeass,
      runnerupteamnametext:
        "Team Code Geass from Datta Meghe College of Engineering (DMCE), Navi Mumbai Secured 2nd Rank in Problem statement 1",
    },
    {
      problem: "Problem Statement 2",
      winnerTeamname: "Dataminers",
      winnerimg:Recursives,
      winnerteamtext:
        "Team The Recursives from Thadomal Shahani Engineering College (TSEC), Mumbai Secured 1st Rank in Problem statement 2",
      runnerupteamname: "Dash",
      runnerimg:asapcoders,
      runnerupteamnametext:
        "Team ASAP Coders from Vidyavardhini’s College of Engineering and Technology Secured 2nd Rank in Problem statement 2",
    },
    {
      problem: "Problem Statement 3",
      winnerTeamname: "Dataminers",
      winnerimg:init,
      winnerteamtext:
        "Team init 0 from Shri Vile Parle Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai Secured 1st Rank in Problem statement 3",
      runnerupteamname: "Dash",
      runnerimg:hachbytes,
      runnerupteamnametext:
        "Team HashBytes from FR. C. Rodrigues Institute of Technology (FCRIT), Navi Mumbai Secured 2nd Rank in Problem statement 3",
    },
    {
      problem: "Problem Statement 4",
      winnerTeamname: "Dataminers",
      winnerimg:janhavi,
      winnerteamtext:
        "Team DataMiners from Datta Meghe College of Engineering (DMCE), Navi Mumbai Secured 1st Rank in Problem statement 4",
      runnerupteamname: "Dash",
      runnerimg:nekox,
      runnerupteamnametext:
        "Team NekoX from G H Raisoni College of Engineering and Management Secured 2nd Rank in Problem statement 4",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className=" text-3xl md:text-5xl text-white font-semibold text-center z-[100]">
          Winners
        </h1>
      </div>
      {winnersdata.map((data) => (
        <div className="mt-5">
          <h1 className=" border-l-4 border-cyan-400 text-white text-4xl p-4 mb-5  sm:ml-28 sm:mb-10">
            {data.problem}
          </h1>
          <div className=" flex flex-wrap gap-10 sm:gap-0  justify-evenly items-center">
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-xl">
              <img
                src={data.winnerimg}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-10 text-3xl font-bold text-white">Winner</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-md leading-6 text-gray-300">
                {data.winnerteamtext}
              </div>
            </article>
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-xl">
              <img
                src={data.runnerimg}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-10 text-3xl font-bold text-white">
                Runner Up
              </h3>
              <div class="z-10 gap-y-1 overflow-hidden text-md leading-6 text-gray-300">
                {data.runnerupteamnametext}
              </div>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OfflineWinners;
