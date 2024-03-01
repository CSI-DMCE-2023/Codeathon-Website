import DomainCard from "./DomainCard"

function MainDomain() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto  bg-black" >
            <p className=" h-[30%] p-10  md:text-7xl sm:text-4xl text-2xl  text-[white] font-bold  text-center  ">DOMAINS</p>
            <DomainCard />

        </div>
    )
};

export default MainDomain;