import "./Domain.css"

function Domain() {


  const objects = [
    {
      title: "SMART AUTOMATION",
      imgLink: "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?t=st=1709318529~exp=1709322129~hmac=4570f59360d09744b89f8dedf9f6322f9fb89e316405655279f733a9aabd5468&w=996"
    },
    {
      title: "SOCIAL IMPACT",
      imgLink: "https://img.freepik.com/free-photo/dictatorship-oppression-collage-concept_23-2149711433.jpg?t=st=1709318206~exp=1709321806~hmac=04c5c38e409b5d3608d9b09c47a1353d355579918eeac71f82cf88e6f4b5778c&w=996"
    },
    {
      title: "FINTECH",
      imgLink: "https://img.freepik.com/free-photo/fintech-investment-financial-internet-technology-concept_53876-124767.jpg?t=st=1709318565~exp=1709322165~hmac=4ffa730a9d27ad25b928e1ed2ba5702d83a2bece61301c772361a019cbf61352&w=996"
    },
    {
      title: "SUSTAINABLE DEVELOPMENT",
      imgLink: "https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196699.jpg?t=st=1709318475~exp=1709322075~hmac=84b7d371023de8808625e6757a65a22f1e25a0cb399436f512ea13ba637a2e28&w=996"
    }
  ];
  

  return (



    <>
      <div class="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          objects.map((item, i) => {
            return <div class="card w-full md:w-[80%] mx-auto h-40 hover:shadow-2xl hover:shadow-sky-400 shadow-sm duration-150 shadow-sky-400 transition-shadow">
              <div class="Box py-12">
                <h2 className="text-white text-center font-bold text-2xl" >{item.title}</h2>

              </div>
              <div class="absolute inset-0 object-fit">
                <img className="w-full h-full" src={item.imgLink} alt="loading"  />

              </div>
            </div>
          })
        }
      </div>



    </>
  )
};

export default Domain;