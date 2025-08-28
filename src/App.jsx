import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Cocktails } from './components/Cocktails'
import { About } from './components/About'



gsap.registerPlugin(ScrollTrigger,SplitText)


function App() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
    </main>
  )
}

export default App