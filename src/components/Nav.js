import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Nav.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { GrImage } from 'react-icons/gr';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';

function Nav(params) {
  return (
    <nav className="nav nav__container">
      {/* <a href="#" className="nav__logo">
        Vero
      </a> */}
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list nav__grid">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <AiOutlineHome className="nav__icon" />
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <BiUser className="nav__icon" /> Sobre mí
            </a>
          </li>
          <li className="nav__item">
            <a href="#proyectos" className="nav__link">
              <GrImage className="nav__icon" />
              Proyectos
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <AiOutlineFileText className="nav__icon" />
              Tecnologías
            </a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__link">
              <AiOutlineSend className="nav__icon" />
              Contacto
            </a>
          </li>
        </ul>
      </div>{' '}
      {/* <AiOutlineClose className="nav__close" id="nav-close" /> */}
      <div className="nav__btns">
        <div className="nav__toggle" id="nav-toggle">
          <AiOutlineAppstore />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
