import React from 'react';

//STYLES
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

// //RUTAS EXTERIORES
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

//SERVICIOS
// import callToApi from '../services/api';

//RUTAS INTERNAS (COMPONENTES)
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Proyects from './Proyects';
import Contact from './Contact';
import Footer from './Footer';

//RUTAS DETALLE PROYECTO
import OpenSpaces from '../components/Detail/OpenSpaces';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Proyects />
      <Contact />

      <Footer />
      <div className="paperOverlay"></div>
    </>
  );
}
export default App;
