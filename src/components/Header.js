import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import Nav1 from '../components/Nav1';
import NavMobile from './NavMobile';
import CV from '../CV.pdf';
import YO from '../images/YO.jpg.png';

function Header() {
  return (
    <header className="header" id="home">
      <Nav1 />
      <NavMobile />

      <div className="header__infoAndButtons">
        {' '}
        <div className="header__info">
          {' '}
          <h5 className="header__hello">¡Hola!</h5>
          <h1 className="header__name">Soy Verónica Isla</h1>
          <h5 className="header__frontEnd">Front End Developer</h5>
        </div>
        <div>
          <button type="button" className=" header__btn">
            <a className="header__link" href={CV} download>
              Descargar CV
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
      </div>
      <img className="header__img" src={YO} alt="Vero Isla"></img>
    </header>
  );
}
export default Header;
