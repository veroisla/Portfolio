import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import '../styles/Components/Header.scss';

const HeaderSocials = () => {
  return (
    <section className="header__socials">
      <a
        className="header__link"
        href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <BsLinkedin />
      </a>
      <a
        className="header__link"
        href="https://github.com/veroisla"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </section>
  );
};

export default HeaderSocials;
