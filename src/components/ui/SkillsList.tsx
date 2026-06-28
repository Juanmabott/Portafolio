import { skillCategories } from "../../data/skills";

/** Contenido de Conocimientos (sin sección ni título: el drawer ya los aporta). */
const SkillsList = () => {
  return (
    <div className="skills-categories">
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="skill-category-title">{category.title}</h3>
          <div className="skill-chips">
            {category.skills.map((skill) => (
              <span key={skill.name} className="skill-chip">
                {skill.img && (
                  <img src={skill.img} alt="" width="18" height="18" loading="lazy" />
                )}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
