import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Profile from '../sections/Profile';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';

const PortfolioContainer: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <div className="grid-2col">
        <Experience />
        <Skills />
      </div>
      <div className="grid-2col">
        <Education />
        <Projects />
      </div>
      <Certifications />
      <Footer />
    </div>
  );
};

export default PortfolioContainer;