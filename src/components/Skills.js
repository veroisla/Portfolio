import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Skills.scss';

import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoSass } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { FaGitAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { DiNpm } from 'react-icons/di';

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Tecnologías</h2>
      <div className="skills__iconsSection">
        <div className="skills__icon">
          <IoLogoJavascript />
        </div>
        <div className="skills__icon">
          <IoLogoHtml5 />
        </div>
        <div className="skills__icon">
          <IoLogoCss3 />
        </div>
        <div className="skills__icon">
          <IoLogoSass />
        </div>
        <div className="skills__icon">
          <GrReactjs />
        </div>

        <div className="skills__icon">
          <BsFillBootstrapFill />
        </div>
        <div className="skills__icon">
          <IoLogoNodejs />
        </div>
        <div className="skills__icon">
          <FaGitAlt />
        </div>
        <div className="skills__icon">
          <BsGithub />
        </div>
        <div className="skills__icon">
          <DiNpm />
        </div>
      </div>
    </section>
  );
};

export default Skills;
