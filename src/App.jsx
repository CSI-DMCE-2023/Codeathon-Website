

import './App.css'

import About from './components/About'
import GoToTopBtn from './goToTopBtn/GoToTopBtn'

import { Home } from './Home/Home'
import { Sponcers } from './sponcers/Sponcers.jsx'

import Navbar from './Navbar/Navbar'

import { TimeLine } from './TimeLine/TimeLine'
import { Gallery } from './Gallery/Gallery'
import Footer from './footer/Footer'




function App() {


  return (





    <>
      <Navbar />
      <Home />

      <div className='w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 '>

        <About />
      </div>

      <TimeLine />
      <Gallery />
      <Sponcers />
      <GoToTopBtn />
      <Footer />
    </>

  )
}

export default App
