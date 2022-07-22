import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import CV from '../CV.pdf';
import ME from '../images/ME.jpg';
import { BsArrowDownCircle } from 'react-icons/bs';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header className="header" id="home">
      <h5 className="header__hello">¡Hola!</h5>
      <h1 className="header__name">Soy Verónica Isla</h1>
      <h5 className="header__frontEnd">Front End Developer</h5>
      <div className="header__btn--div">
        <button type="button" className="btn header__btn--cv">
          <a className="header__link--cv" href={CV} download>
            Download CV
          </a>
        </button>
        <button type="button" className="btn header__btn--talk">
          <a className="header__link--talk" href="#contact">
            ¿Hablamos?
          </a>
        </button>
      </div>

      <section className="header__section2">
        {' '}
        <HeaderSocials />
        <img className="img header__img  " src={ME} alt="Vero Isla"></img>
        <div className="header__scrollDown">
          <a className="header__link arrow" href="#contact">
            <BsArrowDownCircle className="header__arrow" />
          </a>{' '}
        </div>
      </section>
    </header>
  );
}
export default Header;
