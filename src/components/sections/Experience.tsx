import { experience } from "../../data/experience";
import { useLang } from "../../i18n/context";
import { BriefcaseIcon, GraduationCapIcon } from "../ui/icons";
import "./Experience.css";

const Experience = () => {
  const { lang, t } = useLang();

  if (experience.length === 0) return null;

  return (
    <section id="experiencia" className="section experience" aria-labelledby="experiencia-title">
      <h2 id="experiencia-title" className="section-title">
        {t.sections.experience}
      </h2>

      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.org}-${item.title.es}`} className="timeline-item">
            <span className="timeline-icon" aria-hidden="true">
              {item.kind === "work" ? <BriefcaseIcon /> : <GraduationCapIcon />}
            </span>
            <div className="timeline-body">
              <div className="timeline-head">
                <h3 className="timeline-title">{item.title[lang]}</h3>
                {item.period && <span className="timeline-period">{item.period[lang]}</span>}
              </div>
              <p className="timeline-org">
                <span className="sr-only">{t.experience[item.kind]}: </span>
                {item.org}
              </p>
              {item.description && <p className="timeline-desc">{item.description[lang]}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
