import React from 'react';

//STYLES
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

//RUTAS INTERNAS
import Header from './Header';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Proyects />
      <Skills />
      <Footer />
    </>
  );
}
export default App;
