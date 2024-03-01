import MainDomain from "./MainDomain"
import AboutDetail from "./AboutDetail"
import React from 'react'

const About = () => {
    return (  
        <div className="w-full  bg-slate-900 flex flex-col justify-start items-center gap-4">
             {/* <Cuboid/> */}
            <AboutDetail/>
           
        </div>
      
        
    )
}

export default About
