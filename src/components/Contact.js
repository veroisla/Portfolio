import React from 'react';
import { BsChatSquareDotsFill } from 'react-icons/bs';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

import '../styles/Components/Contact.scss';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="card__one">
                <BsChatSquareDotsFill className="card__chat" />
                <h2>¿Hablamos?</h2>
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <ul className="card__links">
                <li>
                  <a
                    className="card__icon"
                    href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="card__icon"
                    href="mailto:veroislagleaniz@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </a>
                </li>
                <li>
                  <a
                    className="card__icon"
                    href="https://github.com/veroisla"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
