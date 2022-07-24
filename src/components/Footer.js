import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Footer.scss';
import { GiIsland } from 'react-icons/gi';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer__social">
        {' '}
        <a
          className="footer__icons"
          href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <BsLinkedin />
        </a>
        <a
          className="footer__icons"
          href="mailto:veroislagleaniz@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <FiMail />
        </a>
        <a
          className="footer__icons"
          href="https://github.com/veroisla"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>{' '}
      <p className="footer__copyrigth">
        Website Design by Verónica Isla <GiIsland className="footer__island" />
      </p>
      {/* <a href="#home">
        <BsArrowUpCircleFill className="footer__arrow" />
      </a>{' '} */}
    </footer>
  );
}

export default Footer;
