// import DomainCard from "./DomainCard";
import Domain from "./Domain";

function MainDomain() {

  
  return (
    <div  className="flex flex-col justify-center items-center w-full h-auto  bg-black py-20">
      <p className=" h-[30%] py-12  md:text-7xl sm:text-4xl text-2xl  text-[white] font-bold  text-center  ">
        DOMAINS
      </p>
      {/* <DomainCard /> */}
      <Domain />
    </div>
    
  );
}

export default MainDomain;
