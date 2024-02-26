import React, { useEffect } from 'react'
import GLOBE from 'vanta/src/vanta.globe'
import Navbar from '../Navbar/Navbar'
import './home.css'

const Home = () => {

  useEffect(() => {
    GLOBE({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x1682e0,
      color2: 0xb93ea,
      backgroundColor: 0x0
    })
  }, [])
  return (
    <div className='bg h-screen w-screen' id='vanta'>
      <Navbar />
      <div className=' h-full w-full  '>
        <h1 className='text-white text-8xl btn-shine'>CODE-A-THON</h1>

      </div>

    </div>
  )
}

export default Home
