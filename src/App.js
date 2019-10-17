import React from 'react';
import Intro from './section/intro';
import AboutMe from './section/aboutme';
import Skills from './section/skills';
import Experience from './section/experience';
import Education from './section/education';
import Portfolio from './section/portfolio';
import Contact from './section/contact';

import './App.css';

function App() {
  return (
    <div className="Myportfolio_mainContainer">
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Experience/>
        <Education/>
        {/* <Portfolio/> */}
        <Contact/>
    </div>
  );
}

export default App;
