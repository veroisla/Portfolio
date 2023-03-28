import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/About.scss';
import womenWithComputer from '../images/figures/womenWithComputer.png';
import Skills from './Skills';

function About() {
  return (
    <section id="about">
      <div className="about">
        <h2 className="about__aboutMe">Sobre mí</h2>
        <div className="about__container animate__animated animate__fadeInUp">
          <div className="about__info">
            <p className="about__text">
              Programadora <strong>Frontend</strong> con experiencia en el
              desarrollo de aplicaciones web/móvil y en constante crecimiento.{' '}
              <p className="about__text">
                Interesada en aprender más sobre maquetación y la filosofía
                Agile.
              </p>{' '}
            </p>
            <p className="about__text">
              ✓ <strong>Frontend Developer - Kairós DS</strong>
              <p className="about__text">(Nov 22 - Marz 23)</p>
            </p>
          </div>
          <img
            src={womenWithComputer}
            alt="Mujer con ordenador"
            className="about__img"
          />
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default About;
