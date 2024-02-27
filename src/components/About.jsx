import Domain from "./Domain"
import Cuboid from "./Cuboid"
import AboutDetail from "./AboutDetail"
import React from 'react'

const About = () => {
    return (
        
           
        <div className="w-full  bg-slate-950 flex flex-col justify-start items-center gap-4">
             <Cuboid/>
            <AboutDetail/>
            <Domain/>
        </div>
      
        
    )
}

export default About
