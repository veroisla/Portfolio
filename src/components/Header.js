import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import CV from '../CV.pdf';

import FotoVero from '../images/fotoVero.png';
import Flower from '../images/figures/Flor-01.png';
import { AiTwotoneHeart } from 'react-icons/ai';

function Header() {
  return (
    <header className="header" id="home">
      <div className="header__containerInfoAndImg">
        {' '}
        <div className="header__infoAndButtons animate__animated animate__fadeInLeft">
          <div className="header__info">
            <h1>Verónica Isla</h1>
            <h2 className="header__frontend">Frontend Developer</h2>
          </div>
          <div className="header__containerBtn">
            <button type="button" className="header__btn header__btn--cv">
              <a className="header__link" href={CV} download>
                Descargar CV
              </a>
            </button>
            <button type="button" className="header__btn header__btn--speak">
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
        </div>
        <div className="header__containerImg animate__animated ">
          <img className="header__img" src={FotoVero} alt="Vero Isla"></img>
        </div>
      </div>

      <img className="header__flower" src={Flower} alt="Vero Isla"></img>
      <small className="header__copyRitght">
        Made with <AiTwotoneHeart className="header__heart" /> by Vero Isla
      </small>
    </header>
  );
}
export default Header;
