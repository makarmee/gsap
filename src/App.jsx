import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import { NavBar } from './components/NavBar'



gsap.registerPlugin(ScrollTrigger,SplitText)


function App() {
  return (
    <main>
      <NavBar/>
    </main>
  )
}

export default App