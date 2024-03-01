import { useEffect } from "react";
import "./Domain.css"


function Domain() {


  const objects = [
    {
      title: "SMART AUTOMATION",
      imgLink: "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?t=st=1709318529~exp=1709322129~hmac=4570f59360d09744b89f8dedf9f6322f9fb89e316405655279f733a9aabd5468&w=996",
      paragraph: "In the era of rapid technological advancements, smart automation emerges as a pivotal solution to streamline processes, enhance productivity, and revolutionize industries. "
    },
    {
      title: "SOCIAL IMPACT",
      imgLink: "https://img.freepik.com/free-photo/dictatorship-oppression-collage-concept_23-2149711433.jpg?t=st=1709318206~exp=1709321806~hmac=04c5c38e409b5d3608d9b09c47a1353d355579918eeac71f82cf88e6f4b5778c&w=996",
      paragraph: "Social impact initiatives play a crucial role in addressing pressing societal challenges and fostering positive change. By harnessing the power of community engagement, advocacy, and innovative solutions, social "
    },
    {
      title: "FINTECH",
      imgLink: "https://img.freepik.com/free-photo/rocket-spaceship-launch-startup-mission-graphic_53876-123880.jpg?w=1060&t=st=1709320460~exp=1709321060~hmac=0beaf4c2873cd41ed0df819beb0f3b16253279b74a2be87e86f6c488a0508e7b",
      paragraph: "In the dynamic landscape of finance and technology, FinTech emerges as a disruptive force"
    },
    {
      title: "SUSTAINABLE DEVELOPMENT",
      imgLink: "https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196699.jpg?t=st=1709318475~exp=1709322075~hmac=84b7d371023de8808625e6757a65a22f1e25a0cb399436f512ea13ba637a2e28&w=996",
      paragraph: "Sustainable development lies at the heart of addressing global environmental, social,. "
    }
  ];
  




  return (



    <>
      <div  class="container grid grid-cols-1 sm:grid-cols-2 gap-4 md:px-28">
        {
          objects.map((item, i) => {
            return <div key={i} class="card  bg-black max-sm:w-[80%] w-full mx-auto md:w-[70%]  h-48  hover:shadow-2xl hover:shadow-sky-400 shadow-sm duration-150 shadow-sky-400 transition-shadow">
              
              <div class=" rounded-md Box overflow-hidden bg-black  object-fit">
                <img className="w-full h-full opacity-30 " src={item.imgLink} alt="loading" />

              </div>
              <div class=" rounded-md absolute inset-0   p-2">
                <h2 className="text-white text-center mb-2 font-bold text-2xl " >{item.title}</h2>
                <p id="domainpara" className="text-white text-center">{item.paragraph}</p>

              </div>
            </div>
          })
        }
      </div>



    </>
  )
};

export default Domain;