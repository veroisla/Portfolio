import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Nav.scss';

import { useState } from 'react';

//ICONS
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';

function Nav(params) {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className="nav">
      <a
        href="#home"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#proyects"
        onClick={() => setActiveNav('#proyects')}
        className={activeNav === '#proyects' ? 'active' : ''}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
