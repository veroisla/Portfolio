import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Contact.scss';

function Contact(params) {
  return (
    <section id="contact" className="form">
      <form
        action="https://formspree.io/f/mrgjdwgk"
        method="POST"
        target="_blank"
      >
        <fieldset className="form__input">
          <label for="fullName" className="lable_name">
            Nombre completo<span>*</span>
          </label>
          <input
            className="form__input--box"
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Nombre..."
            required
          />
        </fieldset>

        <section className="desktopversion">
          <fieldset className="form__input">
            <label for="email" className="email">
              Email<span>*</span>
            </label>

            <input
              className="form__input--box emaildesktop"
              id="email"
              type="email"
              name="email"
              placeholder="nombre.apellidos@mail.com"
              required
            />
          </fieldset>
        </section>

        <fieldset className="form__input">
          <label for="message" className="message">
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
          <input className="submit" type="submit" value="enviar" />
        </fieldset>
      </form>
    </section>
  );
}

export default Contact;
