

import './App.css'

import About from './components/About'

import { Home } from './Home/Home'
import Sponcers from './sponcers/Sponcers'

import { TimeLine } from './TimeLine/TimeLine'




function App() {


  return (





    <>

       <Home />

    <div className='w-full h-full bg-slate-900 flex flex-col justify-start items-center gap-4 '>
                 
        <About />
      </div> 

      <TimeLine />
      <Sponcers/>

    </>

  )
}

export default App
