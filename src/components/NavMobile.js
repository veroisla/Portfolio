import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components/NavMobile.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaFolder } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isActive, setIsActive] = useState('home');

  const handleLink = (ev, id) => {
    setIsActive(id);
  };

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handlePopup = () => {
    setIsNavOpen(true);
    document.body.classList.add('modal-overflow');
  };

  const handleClosePopup = () => {
    setIsNavOpen(false);
    setIsOpen(false);
    document.body.classList.remove('modal-overflow');
  };

  return (
    <div>
      <div className={isNavOpen === true ? 'modal' : ''}>
        <div className="nav__mobile">
          <div onClick={handleNav} className={isOpen ? 'none' : 'show'}>
            <GiHamburgerMenu onClick={handlePopup} className="hamburguer" />
          </div>

          <div className={isOpen ? 'nav__container' : 'none'}>
            <div onClick={handleNav}>
              <CgCloseR onClick={handleClosePopup} className="close" />
            </div>

            <nav>
              <ul className="nav__listMobile">
                <Link to="/">
                  <li
                    className={
                      isActive === 'home'
                        ? 'nav__activeLink nav__item'
                        : 'nav__item'
                    }
                    onClick={(ev) => handleLink(ev, 'home')}
                  >
                    <AiFillHome className="nav__icons" />
                    <a href="#home" onClick={handleClosePopup}>
                      Home
                    </a>
                  </li>
                </Link>

                <Link to="/About">
                  <li
                    className={
                      isActive === 'about'
                        ? 'nav__activeLink nav__item'
                        : 'nav__item'
                    }
                    onClick={(ev) => handleLink(ev, 'about')}
                  >
                    <BsFillPersonFill className="nav__icons" />
                    <a href="#about" onClick={handleClosePopup}>
                      Sobre mí
                    </a>
                  </li>
                </Link>
                <Link to="/Proyects">
                  <li
                    className={
                      isActive === 'proyects'
                        ? 'nav__activeLink nav__item'
                        : 'nav__item'
                    }
                    onClick={(ev) => handleLink(ev, 'proyects')}
                  >
                    <FaFolder className="nav__icons" />
                    <a href="#proyects" onClick={handleClosePopup}>
                      Proyectos
                    </a>
                  </li>
                </Link>
                <Link to="/Contact">
                  <li
                    className={
                      isActive === 'contact'
                        ? 'nav__activeLink nav__item'
                        : 'nav__item'
                    }
                    onClick={(ev) => handleLink(ev, 'contact')}
                  >
                    <MdOutlineAlternateEmail className="nav__icons" />
                    <a href="#contact" onClick={handleClosePopup}>
                      Contacto
                    </a>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
