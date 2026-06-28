import type { Project } from "../../data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, tech, demo, repo } = project;

  return (
    <article className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <ul className="project-tech">
        {tech.map((t) => (
          <li key={t} className="project-tag">
            {t}
          </li>
        ))}
      </ul>

      {(demo || repo) && (
        <div className="project-links">
          {demo && (
            <a
              className="project-link demo"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver demo ↗
            </a>
          )}
          {repo && (
            <a
              className="project-link repo"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Código ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
