const Skills = () => {
const skills = [
  // Languages
  { name: "C", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://www.cprogramming.com/" },
  { name: "C#", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", url: "https://www.w3schools.com/cs/" },
  { name: "JavaScript", level: "Avanzado", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
  { name: "PHP", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://www.php.net" },
  { name: "Python", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org" },
  { name: "HTML", level: "Avanzado", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", level: "Avanzado", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

  // Frameworks
  { name: "React", level: "Avanzado", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://reactjs.org/" },
  { name: "Node.js", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", url: "https://nodejs.org" },
  { name: "Unity", level: "Intermedio", img: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg", url: "https://unity.com/" },
  { name: "Tailwind", level: "Intermedio", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", url: "https://tailwindcss.com/" },

  // Tools
  { name: "Git", level: "Avanzado", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", url: "https://git-scm.com/" },
  { name: "GitHub", level: "Avanzado", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com/" },
  { name: "Linux", level: "Intermedio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.linux.org/" },
  { name: "Blender", level: "Intermedio", img: "https://download.blender.org/branding/community/blender_community_badge_white.svg", url: "https://www.blender.org/" }
];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Básico": return "rgb(255, 183, 77)";
      case "Intermedio": return "rgb(77, 171, 255)";
      case "Avanzado": return "rgb(0, 255, 128)";
      default: return "white";
    }
  };

  return (
    <section className="skills-section">
      <h1 className="text-4xl font-bold text-center mb-8">Conocimientos</h1>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <a 
              key={index}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              className="skill-item"
            >
              <div className="skill-content">
                <img src={skill.img} alt={skill.name} width="40" height="40"/>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span 
                    className="skill-level"
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
