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
  // PS4 SHORTLISTED TEAMS
  { teamname: "Astrea", teamlead: "Devanshu Mahapatra" },
  { teamname: "Team Confluence", teamlead: "Mahesh Sathe" },
  { teamname: "DataMiners", teamlead: "Janhavi Chaudhari" },
  { teamname: "Group of engineers", teamlead: "Hari Haran" },
  { teamname: "hackHEMISPHERE", teamlead: "akshita bhasin" },
  { teamname: "Jobless", teamlead: "Vedant Mankar" },
  { teamname: "LionsOfVit", teamlead: "PRAKASHCHAND CHOUDHARY" },
  { teamname: "NekoX", teamlead: "Devyani Chavan" },
  { teamname: "#Coders", teamlead: "Saurabh Kuche" },
  { teamname: "argentavious", teamlead: "Trushank Vashikar" },
  { teamname: "EyeQ", teamlead: "Yash Ahirrao" },
  { teamname: "Proto", teamlead: "shubham Varma" },
  { teamname: "SAARTHI", teamlead: "Shaswat mishra" },
  { teamname: "Team Swift", teamlead: "Karan Patel" },

  // PS3 SHORTLISTED TEAMS
  { teamname: "NorthStar 3.O", teamlead: "Omkar Kale" },
  { teamname: "It's A Feature", teamlead: "Vineet Parmar" },
  { teamname: "ALPHA iQ", teamlead: "Vedant Deshmukh" },
  { teamname: "CodeSmashers", teamlead: "Simran Patil" },
  { teamname: "debugging_barbies", teamlead: "Soha Jawdekar" },
  { teamname: "Forkers", teamlead: "Utkarsh Sharma" },
  { teamname: "init 0", teamlead: "Shivam Musterya" },
  { teamname: "LazyMakers", teamlead: "Sarthak Shitole" },
  { teamname: "No Direction", teamlead: "Parth Mahakal" },
  { teamname: "Pollux", teamlead: "Saksha Gotad" },
  { teamname: "Spark Syndicate", teamlead: "RAJAS DESHPANDE" },
  { teamname: "HashBytes", teamlead: "Shriraj Patil" },
  { teamname: "Virtual Voyagers", teamlead: "Sai Patil" },

  // PS2 SHORTLISTED TEAMS
  { teamname: "ASAP Coders", teamlead: "PAARTH BARADIA" },
  { teamname: "Pravartak", teamlead: "Tejas Paradkar" },
  { teamname: "AlgoTwists", teamlead: "Sakshi Dhamapurkar" },
  { teamname: "BlockBusters", teamlead: "Mihir Pandit" },
  { teamname: "CodeJourney", teamlead: "Rudraksh Raut" },
  { teamname: "HackBreakers", teamlead: "Disha Honmane" },
  { teamname: "InnovisionSquad", teamlead: "Shubham Pitekar" },
  { teamname: "L(ETH)AL", teamlead: "Shaurya S" },
  { teamname: "Nexus Coders", teamlead: "Chaitanya Shivade" },
  { teamname: "QuatXplorers", teamlead: "Soham More" },
  { teamname: "Team Vulcan", teamlead: "LAKSH JAIN" },
  { teamname: "Tech Army", teamlead: "Mandvi Shukla" },
  { teamname: "The Recursives", teamlead: "Vishesh Gatha" },
  { teamname: "web3galaxy", teamlead: "Vedant Jha" },
  { teamname: "InnovateXcel", teamlead: "Durgesh Firake" },
  { teamname: "Snowflake", teamlead: "Viraaj Gupta" },

  // PS1  Shortlisted
  { teamname: "Code Geass", teamlead: "Ishaan Parsone" },
  { teamname: "Syn'ax", teamlead: "Anushka Pandit" },
  { teamname: "whocares", teamlead: "Taher Ariwala" },
  { teamname: "ALGORTHIM AVENGERS", teamlead: "Uthkrushta Mathur" },
  { teamname: "Brocode", teamlead: "Ali Malik" },
  { teamname: "Byte coders", teamlead: "Soham Patil" },
  { teamname: "Cybergirlism", teamlead: "Roshni Sahoo" },
  { teamname: "DeepRest", teamlead: "Mukund Iyer" },
  { teamname: "flutterFlies", teamlead: "Manthan Parsekar" },
  { teamname: "LANICODERS", teamlead: "Rahul Kamble" },
  { teamname: "Maqsad1", teamlead: "MOHAMMED ARAFAT SHAIKH" },
  { teamname: "Mid-Max", teamlead: "Kasam Mapara" },
  { teamname: "The Innovation Incubators", teamlead: "Ashish Jadhav" },
];

function Shortlisted() {
  const shuffledArray = shuffle(shortlistedteams);
  return (
    <div id="shortlisted-teams" className="mb-16 pt-10">
      <h1 className="pb-10 text-3xl md:text-5xl text-white font-bold text-center z-[100]">
        ROUND 2 SHORTLISTED TEAMS
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
