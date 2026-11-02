import { about } from "../../data/about";
import { useLang } from "../../i18n/context";
import "./About.css";

const About = () => {
  const { lang, t } = useLang();

  return (
    <section id="sobre-mi" className="section about" aria-labelledby="sobre-mi-title">
      <h2 id="sobre-mi-title" className="section-title">
        {t.sections.about}
      </h2>
      <div className="about-text">
        {about[lang].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
