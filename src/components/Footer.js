import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Footer.scss';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { GiIsland } from 'react-icons/gi';

function Footer(params) {
  return (
    <footer className="footer">
      <p className="footer__copyrigth">
        © Verónica Isla <GiIsland className="footer__island" />
      </p>
      <a href="#home">
        <BsArrowUpCircleFill className="footer__arrow" />
      </a>{' '}
    </footer>
  );
}

export default Footer;
