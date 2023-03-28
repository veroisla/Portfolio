import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Proyects.scss';
import ProyectArticle from './ProyectArticle';

//IMÁGENES

import RickMorty from '../images/Rick&Morty.JPG';
import SignupForm from '../images/SignupForm.jpg';
import CardDetail from '../images/CardDetail.png';
import Calculadora from '../images/Calculadora.png';
import Napptilus from '../images/Napptilus.jpg';
import Sunnyside from '../images/Sunnyside.jpg';
import Decathlon from '../images/Decathlon.jpg';
import Advice from '../images/Advice.JPG';
import openSpaces from '../images/OpenSpaces.jpg';
import LoveLace from '../images/LoveLace.jpg';
import Cocktail from '../images/Cocktail.jpg';
import Owen from '../images/Owen.jpg';
import AwesomeII from '../images/Awesome2.jpg';
import ArrowUp from './ArrowUp';

//ICONOS

import { FaFolder } from 'react-icons/fa';

function Proyects() {
  return (
    <section id="proyects" className="proyects__proyects">
      <ArrowUp />

      <h5 className="proyects__title">Proyectos</h5>

      <div className="proyects__listProyects animate__animated animate__fadeInUpBig">
        {/* RICK AND MORTY */}
        <ProyectArticle
          title={'Rick&Morty'}
          img={RickMorty}
          codeLink={'https://github.com/veroisla/Rick-Morty'}
          liveProyect={'https://veroisla.github.io/Rick-Morty/'}
        />
        {/* SIGNUP FORM */}
        <ProyectArticle
          title={'Signup Form'}
          img={SignupForm}
          codeLink={'https://github.com/veroisla/Singup-Form-Frontend-mentor'}
          liveProyect={
            'https://veroisla.github.io/Singup-Form-Frontend-mentor/'
          }
        />

        {/* TARJETA BANCARIA */}
        <ProyectArticle
          title={'interactive Card'}
          img={CardDetail}
          codeLink={
            'https://github.com/veroisla/Interactive-card-details-form-Frontend-Mentor'
          }
          liveProyect={
            'https://veroisla.github.io/Interactive-card-details-form-Frontend-Mentor/'
          }
        />

        {/* CALCULADORA */}
        <ProyectArticle
          title={'Calculadora'}
          img={Calculadora}
          codeLink={'https://github.com/veroisla/Calculator-App'}
          liveProyect={'https://veroisla.github.io/Calculator-App/'}
        />

        {/* PROYECT NAPPTILUS */}
        <ProyectArticle
          title={'Napptilus'}
          img={Napptilus}
          codeLink={'https://github.com/veroisla/Napptilus-Mobile'}
          liveProyect={'https://veroisla.github.io/Napptilus-Mobile/'}
        />

        {/* PROYECT SUNNYSIDE */}
        <ProyectArticle
          title={'Sunnyside'}
          img={Sunnyside}
          codeLink={
            'https://github.com/veroisla/Frontend-Mentor-Sunnyside-agendcy-landing-page'
          }
          liveProyect={
            'https://veroisla.github.io/Frontend-Mentor-Sunnyside-agendcy-landing-page/'
          }
        />

        {/* PROYECT DECATHLON*/}
        <ProyectArticle
          title={'Decathlon'}
          img={Decathlon}
          codeLink={'https://github.com/veroisla/Decathlon-React'}
          liveProyect={'https://veroisla.github.io/Decathlon-React/'}
        />

        {/* PROYECT ADVIDE GENERATOR*/}
        <ProyectArticle
          title={'Advice Generator'}
          img={Advice}
          codeLink={
            'https://github.com/veroisla/Frontend-Mentor-Advice-Generator-App'
          }
          liveProyect={
            'https://veroisla.github.io/Frontend-Mentor-Advice-Generator-App/'
          }
        />

        {/* PROYECTO COCKTAIL */}
        <ProyectArticle
          title={'The Cocktail'}
          img={Cocktail}
          codeLink={'https://github.com/veroisla/The-Cocktail'}
          liveProyect={'https://veroisla.github.io/The-Cocktail/'}
        />

        {/* PROYECTO OWEN WILSON */}
        <ProyectArticle
          title={'Owen Wilson´s "Wow"'}
          img={Owen}
          codeLink={'https://github.com/veroisla/Owen-Wilson-Movies'}
          liveProyect={' https://veroisla.github.io/Owen-Wilson-Movies/'}
        />

        {/* PROYECTO AWESOME 2 */}
        <ProyectArticle
          title={'wesome Profile II'}
          img={AwesomeII}
          codeLink={
            'https://github.com/veroisla/project-promo-p-module-4-team-7'
          }
          liveProyect={'https://awesome-profile-cards-tbeach.herokuapp.com/'}
        />

        {/* PROYECT OPEN SPACES */}
        <ProyectArticle
          title={'Open Spaces'}
          img={openSpaces}
          codeLink={'https://github.com/veroisla/Responsive-web'}
          liveProyect={'https://veroisla.github.io/Responsive-web/'}
        />

        {/* PROYECTO LOVELACE */}
        <ProyectArticle
          title={'Project #LoveLace'}
          img={LoveLace}
          codeLink={
            'https://github.com/veroisla/project-promo-p-module-1-team-5'
          }
          liveProyect={'http://beta.adalab.es/project-promo-p-module-1-team-5/'}
        />
      </div>
    </section>
  );
}

export default Proyects;
