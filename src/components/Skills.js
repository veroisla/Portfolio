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

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__iconsSection">
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoJavascript />
          </div>
          <p className="skills__name">JS</p>
        </div>

        {/* prueba */}
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoHtml5 />
          </div>
          <p className="skills__name">HTML5</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoCss3 />
          </div>
          <p className="skills__name">CSS3</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoSass />
          </div>
          <p className="skills__name">SASS</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <GrReactjs />
          </div>
          <p className="skills__name">ReactJS</p>
        </div>

        <div className="skills__icon">
          <div className="skills__iconHeight">
            <BsFillBootstrapFill />
          </div>
          <p className="skills__name">Bootstrap</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoNodejs />
          </div>
          <p className="skills__name">NodeJS</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <FaGitAlt />
          </div>
          <p className="skills__name">Git</p>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <BsGithub />
          </div>
          <p className="skills__name">GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
