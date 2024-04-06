import React from "react";
import Shortlistedcards from "./Shortlistedcards";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shortlistedteams = [
  "Code Geass",
  "Syn'ax",
  "whocares",
  "ALGORTHIM AVENGERS",
  "BETA",
  "Brocode",
  "Byte coders",
  "Cybergirlism",
  "CyberTitans",
  "DeepRest",
  "flutterFlies",
  "LANICODERS",
  "Maqsad1",
  "Mid-Max",
  "The Innovation Incubators",
  "Code Brigade A",
  "Innov8Coders",
  "Team RANDOM",
  "ASAP Coders",
  "Pravartak",
  "AlgoTwists",
  "BlockBusters",
  "CodeJourney",
  "DevDrishti",
  "HackBreakers",
  "InnovisionSquad",
  "L(ETH)AL",
  "Nexus Coders",
  "QuatXplorers",
  "Team Vulcan",
  "Tech Army",
  "The Recursives",
  "web3galaxy",
  "InnovateXcel",
  "nah i'd win",
  "Snowflake",
  "NorthStar 3.O",
  "It's A Feature",
  "ALPHA iQ",
  "CodeSmashers",
  "debugging_barbies",
  "Forkers",
  "init 0",
  "LazyMakers",
  "No Direction",
  "Pollux",
  "Spark Syndicate",
  "HashBytes",
  "DTG",
  "Virtual Voyagers",
  "xcoder",
  "Astrea",
  "Team Confluence",
  "CodeSquad",
  "DataMiners",
  "Group of engineers",
  "Hack Hustelers",
  "hackHEMISPHERE",
  "HIGHFLYERS",
  "Jobless",
  "LionsOfVit",
  "NekoX",
  "#Coders",
  "argentavious",
  "EyeQ",
  "Proto",
  "SAARTHI",
  "Team Swift",
  "TechNaari",
  "Devin 2.0",
  "Dev Dynasty",
  "/dev/null",
  "Tech Learner",
  "EngineeringOps21",
  "BinaryBrawlers",
  "OTetra",
  "TechConnect",
  "Tech-Wizards",
  "Blockbuster Avengers",
  "InnovateThem",
  "Pixel",
  "PLUG SLAYERS",
  "Crescential",
  "BinaryBlitz",
  "HELLO WORLD",
  "VCETIANS",
  "Team 7",
  "EXigirtech",
  "Team Techtitans",
  "Glitch Guardians",
  "#Builders",
  "IYKUK",
  "Team Codiee",
  "ZenithZest",
  "Dear Coder",
  "Forbidden Sages",
  "CORE 4",
  "Error 4.04 AM",
  "FootMates",
  "Tech Triad",
  "CodeCrew",
  "Code Brigade",
  "The Wiseguys",
  "CodeSprinters",
  "AlphaCode",
  "Odyssey",
  "Dark Coders",
  "Sons Of Devin",
  "Pixel Perfectors",
  "Problem_Solvers",
  "Team Hack Hustlers",
  "Cyberpsychosis",
  "The Troops",
  "CodeDev",
  "LOLCoin Miners",
  "WE WILL WIN!",
  "Phoenix",
  "Hackuna Batata",
  "Freemasons",
  "Wolves",
  "Dual Core",
  "Team Innovative's",
  "SPAMMERZ",
  "Pixel Pioneers.Py",
  "Bytes Buddies",
  "Neural Berg",
  "Code7",
  "Tech_Monkeys",
  "AKM",
  "De'Coders",
];

function Shortlisted() {
  const shuffledArray = shuffle(shortlistedteams);
  return (
    <div className="mb-16">
      <h1 className="pb-10 text-3xl md:text-5xl text-white font-bold text-center z-[100]">
        ROUND 1 SHORTLISTED TEAMS
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          {shuffledArray.map((teams, index) => (
            <Shortlistedcards teamname={teams} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shortlisted;
