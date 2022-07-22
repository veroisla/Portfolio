import React from 'react';

//STYLES
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

import { Routes, Route, Link } from 'react-router-dom';

//RUTAS INTERNAS
import Header from './Header';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Proyects />
      <Skills />
      <Contact />
      <Footer />
      <div className="paperOverlay"></div>
    </>
  );
}
export default App;
