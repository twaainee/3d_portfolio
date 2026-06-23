import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='w-full relative overflow-x-clip'>
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App