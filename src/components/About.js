import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/About.scss';
import { Link } from 'react-router-dom';

function About(params) {
  return (
    <section id="about">
      <div className="prueba about">
        <h2 className="about__aboutMe">Sobre mí</h2>
        <p className="about__text">
          <p className="about__formation">
            <strong>Programadora Front-end y Trabajadora Social</strong>
          </p>
          <p>
            Después de trabajar en el mundo social, me enfrento a un nuevo reto,
            trabajar en el mundo tecnológico.{' '}
          </p>
          <p>
            Tras formarme en el Bootcamp de ADALAB, tengo una{' '}
            <strong>nueva ilusión: </strong>
            Unificar ambas disciplinas y poder generar un impacto social o
            ambiental.
          </p>
        </p>
      </div>
    </section>
  );
}

export default About;
