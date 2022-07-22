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
      <h2 className="skills__title">Tecnologías</h2>
      <div className="skills__iconsSection">
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoJavascript />
          </div>
        </div>

        {/* prueba */}
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoHtml5 />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoCss3 />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoSass />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <GrReactjs />
          </div>
        </div>

        <div className="skills__icon">
          <div className="skills__iconHeight">
            <BsFillBootstrapFill />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <IoLogoNodejs />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <FaGitAlt />
          </div>
        </div>
        <div className="skills__icon">
          <div className="skills__iconHeight">
            <BsGithub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
