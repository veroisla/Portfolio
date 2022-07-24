import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/About.scss';
// import women from '../images/women.png';

function About(params) {
  return (
    <section id="about">
      <div className="about">
        <h2 className="about__aboutMe">Sobre mí</h2>
        <div>
          <p className="about__text">
            <strong>Soy Verónica Isla, Programadora Front End</strong>
          </p>
          <p className="about__text">
            Después de trabajar en el mundo social 👩🏽‍💼, me enfrento a un nuevo
            reto, trabajar en el mundo tecnológico 👩🏽‍💻{' '}
          </p>
          <p className="about__text">
            Tras formarme en un Bootcamp intensivo, tengo una{' '}
            <strong>nueva ilusión ✨: </strong>
            Unificar ambas disciplinas y poder generar un impacto social o
            ambiental.
          </p>
          <p className="about__text">
            Estoy en búsqueda de mi primera <strong>oportunidad laboral</strong>
            , mientras tanto, estoy reforzándo mis conocimientos en{' '}
            <strong>React</strong> y creando pequeños{' '}
            <strong>proyectos.</strong>{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
