import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Projects from './Projects'
import Work from './Work'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home