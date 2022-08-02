import React from 'react';
import { useState } from 'react';
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Menu.scss';
import { FiMenu } from 'react-icons/fi';

const NavMobile = () => {
  const [menu, setMenu] = useState();
  return (
    <nav className="menu">
      <FiMenu />
      <p>Home</p>
      <p>Sobre mí</p>
      <p>Proyectos</p>
      <p>Tecnologías</p>
      <p>Contacto</p>
    </nav>
  );
};

export default NavMobile;
