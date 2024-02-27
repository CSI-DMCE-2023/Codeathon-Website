

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
        <div class="cube-container">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
        <About />
      </div>

      <TimeLine />
      <Sponcers/>

    </>

  )
}

export default App
