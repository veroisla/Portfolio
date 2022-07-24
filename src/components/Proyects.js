import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Proyects.scss';

//ICONOS E IMÁGENES
import Decathlon from '../images/Decathlon.jpg';
import openSpaces from '../images/OpenSpaces.jpg';
import LoveLace from '../images/LoveLace.jpg';
import Cocktail from '../images/Cocktail.jpg';
import Awesome from '../images/Awesome1.jpg';
import Owen from '../images/Owen.jpg';
import AwesomeII from '../images/Awesome2.jpg';
import { BiCodeAlt } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';

function Proyects(params) {
  return (
    <section id="proyects" className="proyects__proyects">
      <h5 className="proyects__title">Proyectos</h5>
      <div className="proyects__listProyects">
        {/* PROYECT DECATHLON*/}
        <article className="proyect__article">
          <h4 className="proyect__name">Decathlon</h4>
          <img
            className="proyect__img"
            src={Decathlon}
            alt="Img Proyect Open Spaces"
            title="Img Open Spaces"
          ></img>{' '}
          <p className="proyect__info">
            Proyecto personal desarrollado con React, filtrado por producto +
            detalle producto.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/Decathlon-React"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href="https://veroisla.github.io/Decathlon-React/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECT OPEN SPACES */}

        <article className="proyect__article">
          <h4 className="proyect__name">Open Spaces</h4>
          <img
            className="proyect__img"
            src={openSpaces}
            alt="Img Proyect Open Spaces"
            title="Img Open Spaces"
          ></img>{' '}
          <p className="proyect__info">
            Maquetación web responsive. HTML5, CSS3, SASS, Grid, Flexbox,
            Animaciones.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/Responsive-web"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href="https://veroisla.github.io/Responsive-web/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECTO GRUPAL 1 */}

        <article className="proyect__article">
          <h4 className="proyect__name">Project #LoveLace</h4>
          <img
            className="proyect__img"
            src={LoveLace}
            alt="Img Proyect LoveLace"
            title="Img Open Spaces"
          ></img>{' '}
          <p className="proyect__info">
            Maquetación responsive de página web, presentación del grupo
            #LoveLace.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/project-promo-p-module-1-team-5"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href="http://beta.adalab.es/project-promo-p-module-1-team-5/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECTO COCKTAIL */}

        <article className="proyect__article">
          <h4 className="proyect__name">The Cocktail</h4>{' '}
          <img
            className="proyect__img"
            src={Cocktail}
            alt="Img Proyect The Cocktail"
            title="Img Open Spaces"
          ></img>{' '}
          <p className="proyect__info">
            Buscador de cocktails, listado favoritos y uso de localStorage,
            desarrollado con JS.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/The-Cocktail"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href="https://veroisla.github.io/The-Cocktail/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECTO AWESOME PROFILE CARDS 1 */}

        <article className="proyect__article">
          <h4 className="proyect__name">Awesome Profile Cards</h4>{' '}
          <img
            className="proyect__img"
            src={Awesome}
            alt="Img Proyect Awesome Profile Cards"
            title="Img Open Spaces"
          ></img>{' '}
          <p className="proyect__info">
            Aplicación para la creación de tarjetas personalizadas, desarrollado
            con JS.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/Awesome-Profile-Cards"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href=" https://beta.adalab.es/project-promo-p-module-2-team-2/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECTO OWEN WILSON */}

        <article className="proyect__article">
          <h4 className="proyect__name">Owen Wilson´s "Wow"</h4>
          <img
            className="proyect__img"
            src={Owen}
            alt="Img Proyect Owen Wilson´s Wow"
            title="Img Open Spaces"
          ></img>
          <p className="proyect__info">
            Buscador de películas de Owen Wilson + detalle de película.
            Desarrollado con React.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/Owen-Wilson-Movies"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href=" https://veroisla.github.io/Owen-Wilson-Movies/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>

        {/* PROYECTO AWESOME 2 */}
        <article className="proyect__article">
          <h4 className="proyect__name">Awesome Profile II</h4>
          <img
            className="proyect__img"
            src={AwesomeII}
            alt="Img Proyect Awesome Profile II"
            title="Img Open Spaces"
          ></img>
          <p className="proyect__info">
            Refactorización de código JS a React con código heredado y
            desarrollo de un servidor web propio.
          </p>
          <div className="proyect__links">
            {' '}
            <a
              href="https://github.com/veroisla/project-promo-p-module-4-team-7"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <BiCodeAlt />
            </a>
            <a
              href="https://awesome-profile-cards-tbeach.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="proyect__icon"
            >
              <RiComputerLine />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Proyects;
