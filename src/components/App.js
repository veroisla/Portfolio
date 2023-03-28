import React from 'react';
import { Routes, Route } from 'react-router-dom';

//STYLES
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

//RUTAS INTERNAS
import Header from './Header';
import About from './About';
import Proyects from './Proyects';
import Contact from './Contact';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function App() {
  window.addEventListener('load', function () {
    window.location.href = 'http://localhost:3000/#/';
  });

  return (
    <div>
      <header>
        <NavDesktop />
        <NavMobile />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/About" element={<About />} />
          <Route path="/Proyects" element={<Proyects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
//  <NavAside />
