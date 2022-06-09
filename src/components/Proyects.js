import { Link } from 'react-router-dom';
import { BiLink } from 'react-icons/bi';

import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Proyects.scss';

//ICONOS E IMÁGENES
import { RiInformationLine } from 'react-icons/ri';
import openSpaces from '../images/openSpaces.jpg';

function Proyects(params) {
  return (
    <section id="proyects" className="proyects">
      <h5 className="proyects__title">Proyectos</h5>
      {/* Proyect Open Spaces */}
      <article className="proyect__article">
        <img
          className="proyect__img"
          src={openSpaces}
          alt="Img Open Spaces"
          title="Img Open Spaces"
        ></img>{' '}
        <div className="proyect__nameAndIcon">
          {' '}
          <h4 className="proyect__name">Open Spaces</h4>
          <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link>
          <a
            href="https://veroisla.github.io/Responsive-web/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default Proyects;

// https://veroisla.github.io/Responsive-web/
