import { Link } from 'react-router-dom';
import { BiLink } from 'react-icons/bi';

import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Proyects.scss';

//ICONOS E IMÁGENES
import { RiInformationLine } from 'react-icons/ri';
import openSpaces from '../images/OpenSpaces.jpg';
import LoveLace from '../images/LoveLace.jpg';
import Cocktail from '../images/Cocktail.jpg';
import Awesome from '../images/Awesome1.jpg';
import Owen from '../images/Owen.jpg';
import AwesomeII from '../images/Awesome2.jpg';

function Proyects(params) {
  return (
    <section id="proyects" className="proyects">
      <h5 className="proyects__title">Proyectos</h5>
      {/* PROYECT OPEN SPACES */}

      <article className="proyect__article">
        <img
          className="proyect__img"
          src={openSpaces}
          alt="Img Proyect Open Spaces"
          title="Img Open Spaces"
        ></img>{' '}
        <div className="proyect__nameAndIcon">
          {' '}
          <h4 className="proyect__name">Open Spaces</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href="https://veroisla.github.io/Responsive-web/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>

      {/* PROYECTO GRUPAL 1 */}

      <article className="proyect__article">
        <img
          className="proyect__img"
          src={LoveLace}
          alt="Img Proyect LoveLace"
          title="Img Open Spaces"
        ></img>{' '}
        <div className="proyect__nameAndIcon">
          {' '}
          <h4 className="proyect__name">Project #LoveLace</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href="http://beta.adalab.es/project-promo-p-module-1-team-5/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>

      {/* PROYECTO COCKTAIL */}

      <article className="proyect__article">
        <img
          className="proyect__img"
          src={Cocktail}
          alt="Img Proyect The Cocktail"
          title="Img Open Spaces"
        ></img>{' '}
        <div className="proyect__nameAndIcon">
          {' '}
          <h4 className="proyect__name">The Cocktail</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href="https://veroisla.github.io/The-Cocktail/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>

      {/* PROYECTO AWESOME PROFILE CARDS 1 */}

      <article className="proyect__article">
        <img
          className="proyect__img"
          src={Awesome}
          alt="Img Proyect Awesome Profile Cards"
          title="Img Open Spaces"
        ></img>{' '}
        <div className="proyect__nameAndIcon">
          {' '}
          <h4 className="proyect__name">Awesome Profile Cards</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href=" https://beta.adalab.es/project-promo-p-module-2-team-2/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>

      {/* PROYECTO OWEN WILSON */}

      <article className="proyect__article">
        <img
          className="proyect__img"
          src={Owen}
          alt="Img Proyect Owen Wilson´s Wow"
          title="Img Open Spaces"
        ></img>
        <div className="proyect__nameAndIcon">
          <h4 className="proyect__name">Owen Wilson´s "Wow"</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href=" https://veroisla.github.io/Owen-Wilson-Movies/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="proyect__icon" />
          </a>
        </div>
      </article>

      {/* PROYECTO AWESOME 2 */}
      <article className="proyect__article">
        <img
          className="proyect__img"
          src={AwesomeII}
          alt="Img Proyect Awesome Profile II"
          title="Img Open Spaces"
        ></img>
        <div className="proyect__nameAndIcon">
          <h4 className="proyect__name">Awesome Profile II</h4>
          {/* <Link to="/OpenSpaces">
            <RiInformationLine className="proyect__icon" />
          </Link> */}
          <a
            href="https://awesome-profile-cards-tbeach.herokuapp.com/"
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
