import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/About.scss';
import { Link } from 'react-router-dom';
// import women from '../images/women.png';

function About(params) {
  return (
    <section id="about">
      <div className="prueba about">
        <h2 className="about__aboutMe">Sobre mí</h2>
        <p className="about__text">
          <p className="about__formation">
            {/* <img src={women} alt="" /> */}
            <strong>Soy Verónica Isla, Programadora Front End</strong>
          </p>
          <p>
            Después de trabajar en el mundo social 👩🏽‍💼, me enfrento a un nuevo
            reto, trabajar en el mundo tecnológico 👩🏽‍💻{' '}
          </p>
          <p>
            Tras formarme en un Bootcamp intensivo, tengo una{' '}
            <strong>nueva ilusión ✨: </strong>
            Unificar ambas disciplinas y poder generar un impacto social o
            ambiental.
          </p>
          <p>
            Estoy en búsqueda de mi primera <strong>oportunidad laboral</strong>
            , mientras tanto, estoy reforzándo mis conocimientos en{' '}
            <strong>React</strong> y creando pequeños{' '}
            <strong>proyectos.</strong>{' '}
          </p>
        </p>
      </div>
    </section>
  );
}

export default About;
