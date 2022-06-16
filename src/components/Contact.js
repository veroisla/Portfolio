import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Contact.scss';

function Contact(params) {
  return (
    <section id="contact" className="form">
      <h2 className="form__title">Contáctame:</h2>
      <form
        action="https://formspree.io/f/mrgjdwgk"
        method="POST"
        target="_blank"
      >
        <div className="form__nameAndMessage">
          <fieldset className="form__input">
            <label for="fullName" className="form__label">
              Nombre<span>*</span>
            </label>
            <input
              className="form__input--box"
              id="fullName"
              type="text"
              name="fullName"
              required
            />
          </fieldset>

          <fieldset className="form__input">
            <label for="email" className="form__label">
              Email<span>*</span>
            </label>

            <input
              className="form__input--box emaildesktop"
              id="email"
              type="email"
              name="email"
              required
            />
          </fieldset>
        </div>
        <fieldset className="form__input">
          <label for="message" className="form__label">
            Mensaje<span>*</span>
          </label>
          <textarea
            className="form__input--textareabox"
            id="message"
            name="message"
            placeholder="¿Hablamos?"
            required
          ></textarea>
        </fieldset>

        <fieldset className="form__send">
          <button className="cta" type="submit">
            <span>Enviar</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Contact;
