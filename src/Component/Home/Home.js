import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'

const Home = () => {
  return (
    
    <div class="container-fluid px-0">
    <Header/>
    <div class="main-wrapper">
    
        <About/>
        <Portfolio/>
        <Resume/> 
        <Contact/> 
   
    </div>
    </div>
  )
}

export default Home