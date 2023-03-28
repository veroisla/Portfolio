import React from 'react';
import '../styles/Components/ProyectArticle.scss';
import { BiCodeAlt } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';

function ProyectArticle(props) {
  return (
    <article className="proyect__article">
      <h4 className="proyect__name">{props.title}</h4>
      <img
        className="proyect__img"
        src={props.img}
        alt={props.title}
        title={props.title}
      ></img>
      <div className="proyect__links">
        {' '}
        <a
          href={props.codeLink}
          target="_blank"
          rel="noreferrer"
          className="proyect__icon"
        >
          <BiCodeAlt />
        </a>
        <a
          href={props.liveProyect}
          target="_blank"
          rel="noreferrer"
          className="proyect__icon"
        >
          <RiComputerLine />
        </a>
      </div>
    </article>
  );
}

export default ProyectArticle;
