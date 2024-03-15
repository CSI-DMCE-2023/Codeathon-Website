
import React from 'react'

const Domains = () => {

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

            <div className="flex flex-col justify-center items-center w-full h-auto  bg-black py-20">
                <p className=" h-[30%] py-12  md:text-7xl sm:text-4xl text-2xl  text-[white] font-bold  text-center  ">
                    DOMAINS
                </p>
                <div className='grid mt-8 md:mt-12 grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 md:grid-cols-4'>
                    {
                        objects && objects.map((item, i) => {
                            return <div class="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
                                <div class="w-56 bottop h-72 bg-blue-400 text-gray-800">
                                    <img class="w-fit h-full z-50 object-cover " src={item.imgLink} alt="logo" srcset="" />
                                </div>
                                <div class=" absolute bot bg-gray-50 bot top-[15.5rem] w-56 p-3 flex flex-col gap-1 group-hover:top-0 group-hover:h-full group-hover:duration-600 duration-500">

                                    <span class="text-black  font-bold text-md">{item.title}</span>
                                    <p class="text-neutral-800">{item.paragraph}</p>
                                </div>


                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Domains