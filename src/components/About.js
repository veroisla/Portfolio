import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/About.scss';

function About(params) {
  return (
    <section id="about" className="about">
      <h5 className="about__knowMe">Conóceme</h5>
      <h2 className="about__aboutMe">Sobre mí</h2>
      <p className="about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores
        quis nam veniam repudiandae corrupti at, rem eaque optio ratione,
        expedita reprehenderit commodi numquam possimus ducimus assumenda nihil
        consequatur odio.
      </p>
      <div>
        <div></div>
      </div>
    </section>
  );
}

export default About;
