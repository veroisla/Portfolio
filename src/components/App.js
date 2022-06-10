import React from 'react';

//STYLES
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

// //RUTAS EXTERIORES
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

//PRUEBA CON RUTAS PARA DETALLE PROYECTO

// function App() {
//   return (
//     <>
//       <nav className="nav">
//         <Link to="/home">
//           <AiOutlineHome />
//         </Link>
//         <Link to="/about">
//           <AiOutlineUser />
//         </Link>
//       </nav>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Nav />
//               <Header />
//               <About />
//               <Skills />
//               <Proyects />
//               <Contact />
//             </>
//           }
//         />

//         <Route path="/OpenSpaces" element={<OpenSpaces />} />
//       </Routes>
//       <Footer />

//       <div className="paperOverlay"></div>
//     </>
//   );
// }
// export default App;
