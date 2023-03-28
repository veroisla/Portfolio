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
    <section className="skills" id="skills">
      <h2 className="skills__title">Tecnologías</h2>

      <div className="skills__iconsSection">
        <div className="skills__icon" title="JavaScript">
          <IoLogoJavascript />
        </div>
        <div className="skills__icon" title="HTML5">
          <IoLogoHtml5 />
        </div>
        <div className="skills__icon" title="CSS3">
          <IoLogoCss3 />
        </div>
        <div className="skills__icon" title="SASS">
          <IoLogoSass />
        </div>
        <div className="skills__icon" title="React">
          <GrReactjs />
        </div>

        <div className="skills__icon" title="Bootstrap">
          <BsFillBootstrapFill />
        </div>
        <div className="skills__icon" title="NodeJS">
          <IoLogoNodejs />
        </div>
        <div className="skills__icon" title="Git">
          <FaGitAlt />
        </div>
        <div className="skills__icon" title="Github">
          <BsGithub />
        </div>
        <div className="skills__icon" title="NPM">
          <DiNpm />
        </div>
      </div>
    </section>
  );
};

export default Skills;
