import { skillCategories } from "../../data/skills";
import { useLang } from "../../i18n/context";
import { tx } from "../../i18n/lang";

/** Contenido de Conocimientos (sin sección ni título: el panel lateral ya los aporta). */
const SkillsList = () => {
  const { lang } = useLang();

  return (
    <div className="skills-categories">
      {skillCategories.map((category) => (
        <div key={category.title.es} className="skill-category">
          <h3 className="skill-category-title">{category.title[lang]}</h3>
          <ul className="skill-chips">
            {category.skills.map((skill) => {
              const name = tx(skill.name, lang);
              return (
                <li key={name} className="skill-chip">
                  {skill.icon && (
                    <img
                      src={`${import.meta.env.BASE_URL}icons/skills/${skill.icon}.svg`}
                      alt=""
                      width="18"
                      height="18"
                      loading="lazy"
                    />
                  )}
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
