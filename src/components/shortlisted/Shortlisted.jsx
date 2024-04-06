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
  "Omkar Kale",
  "Vineet Parmar",
  "Vedant Deshmukh",
  "Simran Patil",
  "Soha Jawdekar",
  "Utkarsh Sharma",
  "Shivam Musterya",
  "Sarthak Shitole",
  "Parth Mahakal",
  "Saksha Gotad",
  "RAJAS DESHPANDE",
  "Shriraj Patil",
  "Naresh Vaishnav",
  "Sai Patil",
  "Chirag Padyal",
  "Devanshu Mahapatra",
  "Mahesh Sathe",
  "Nidhi Pandey",
  "Janhavi Chaudhari",
  "Hari Haran",
  "Rushikesh Gurav",
  "akshita bhasin",
  "Rohini Koli",
  "Vedant Mankar",
  "PRAKASHCHAND CHOUDHARY",
  "Devyani Chavan",
  "Saurabh Kuche",
  "Trushank Vashikar",
  "Yash Ahirrao",
  "shubham Varma",
  "Shaswat mishra",
  "Karan Patel",
  "Sharvari Dubey",
  "Sagar Raikwar",
  "Huda Alam",
  "Sumit Patel",
  "HITESH PATEL",
  "Hartik Shingate",
  "Sajjad Chaus",
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
        SHORTLISTED TEAMS
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
