import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components/NavDesktop.scss';

function NavDesktop() {
  // TODO: GUARDAR ESTADO DEL LINK AL RECARGAR
  const [isActiveLink, setIsActiveLink] = useState('home');

  const handleNav = (ev, id) => {
    setIsActiveLink(id);
  };

  window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('shadow');
    } else {
      nav.classList.remove('shadow');
    }
  });

  return (
    <nav className="nav">
      <ul className="nav__List animate__animated animate__fadeInDown">
        <Link to="/">
          <li
            className={isActiveLink === 'home' ? 'activeLink' : 'nav__ItemList'}
            onClick={(ev) => handleNav(ev, 'home')}
          >
            <a href="#home">Home</a>
          </li>
        </Link>

        <Link to="/About">
          <li
            className={
              isActiveLink === 'about' ? 'activeLink' : 'nav__ItemList'
            }
            onClick={(ev) => handleNav(ev, 'about')}
          >
            <a href="#about">Sobre mí</a>
          </li>
        </Link>
        <Link to="/Proyects">
          <li
            className={
              isActiveLink === 'proyects' ? 'activeLink' : 'nav__ItemList'
            }
            onClick={(ev) => handleNav(ev, 'proyects')}
          >
            <a href="#proyects">Proyectos</a>
          </li>
        </Link>
        <Link to="/Contact">
          <li
            className={
              isActiveLink === 'contact' ? 'activeLink' : 'nav__ItemList'
            }
            onClick={(ev) => handleNav(ev, 'contact')}
          >
            <a href="#contact">Contacto</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavDesktop;
