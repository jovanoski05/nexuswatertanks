import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import Navigation from "./components/Navigation.jsx"
import Slideshow from './components/Slideshow.jsx'
import SectionProducts from './components/SectionProducts.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation/>
      <Slideshow/>
      <SectionProducts/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
