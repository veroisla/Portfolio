import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/NavAside.scss';

import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { SiReact } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { IconContext } from 'react-icons'; //--> Esto permite cambiar el estilo de todos los iconos de una sola vez

const NavAside = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      {' '}
      {/* <IconContext.Provider value={{ color: 'white' }}> */}
      <div className="navbar">
        <Link className="navbar__menuIcon" to="#">
          <FiMenu onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <AiOutlineClose className="nav-icons" />
          </li>
          <li className="nav-text">
            <a href="#home">
              {' '}
              <AiOutlineHome className="nav-icons" />
              Home
            </a>
          </li>
          <li className="nav-text">
            <a href="#about">
              <AiOutlineUser className="nav-icons" />
              Sobre mí
            </a>
          </li>
          <li className="nav-text">
            <a href="#proyects">
              <AiOutlineFolderOpen className="nav-icons" />
              Proyectos
            </a>
          </li>
          <li className="nav-text">
            <a href="#skills">
              {' '}
              <SiReact className="nav-icons" />
              Tecnologías
            </a>
          </li>
          <li className="nav-text">
            <a href="#footer">
              <AiOutlinePhone className="nav-icons" />
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default NavAside;
