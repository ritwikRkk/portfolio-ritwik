import React from 'react'
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';
// import { useOutletContext } from 'react-router-dom';

const Home = () => {
  // const [name]= useOutletContext();
  // console.log(name);
  return (
    <div className="home">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home