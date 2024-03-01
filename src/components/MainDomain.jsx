import DomainCard from "./DomainCard"

function MainDomain(){
    return(
<div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-black" >
<p className=" h-[30%] p-10  text-[4rem] text-[white] font-bold  text-center  ">DOMAIN'S</p>
<DomainCard/>

</div>
    )
};

export default MainDomain;