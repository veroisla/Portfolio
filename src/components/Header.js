import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import CV from '../CV.pdf';
// import ME from '../images/ME.jpg';
import ABI from '../images/abi.jpg';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Header() {
  return (
    <header className="header" id="home">
      {/* <img src={dots} alt="" className="header__dots" /> */}
      <div className="header__info">
        {' '}
        <h5 className="header__hello">¡Hola!</h5>
        <h1 className="header__name">Soy Verónica Isla</h1>
        <h5 className="header__frontEnd">Front End Developer</h5>
      </div>

      <div>
        <button type="button" className=" header__btn">
          <a className="header__link" href={CV} download>
            Download CV
          </a>
        </button>
        <button type="button" className="header__btn">
          <a
            className="header__link"
            href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
            target="_blank"
            rel="noreferrer"
          >
            ¿Hablamos?
          </a>
        </button>
      </div>
      <div className="header__imgAndArrow">
        <img className="header__img" src={ABI} alt="Vero Isla"></img>
        <a className="header__link arrow" href="#footer">
          <AiOutlineArrowDown className="header__arrow" />
        </a>
      </div>
    </header>
  );
}
export default Header;
