import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import CV from '../CV.pdf';
import ME from '../images/ME.jpg';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header className="header">
      <h5>Hello I'm</h5>
      <h1>Vero Isla</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <div className="header__btn--div">
        <button type="button" className="btn header__btn">
          <a href={CV} download>
            Download CV
          </a>
        </button>
        <button type="button" className="btn header__btn">
          <a href="#contact">¿Hablamos?</a>
        </button>
      </div>

      <section className="header__socisls">
        {' '}
        <HeaderSocials />
      </section>
      <img className="header__img" src={ME} alt="Vero Isla"></img>
      <a href="#contact">Scroll Down</a>
    </header>
  );
}
export default Header;
