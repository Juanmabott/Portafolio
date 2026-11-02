import type { Project } from "../../data/projects";
import { useLang } from "../../i18n/context";
import { tx } from "../../i18n/lang";
import { ExternalLinkIcon, GitHubIcon } from "./icons";
import "./ProjectCard.css";

const ProjectCard = ({ project }: { project: Project }) => {
  const { lang, t } = useLang();
  const { context, title, summary, highlights, tech, demo, repo } = project;

  return (
    <article className="project-card">
      {context && <p className="project-context">{tx(context, lang)}</p>}
      <h3 className="project-title">{title[lang]}</h3>
      <p className="project-summary">{summary[lang]}</p>

      <ul className="project-highlights">
        {highlights[lang].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="project-tech" aria-label={t.projects.tech}>
        {tech.map((name) => (
          <li key={name} className="tag">
            {name}
          </li>
        ))}
      </ul>

      {(demo || repo) && (
        <div className="project-links">
          {demo && (
            <a className="btn btn-primary btn-sm" href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon />
              {t.projects.demo}
              <span className="sr-only">
                {" "}
                — {title[lang]} {t.links.newTab}
              </span>
            </a>
          )}
          {repo && (
            <a className="btn btn-secondary btn-sm" href={repo} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              {t.projects.code}
              <span className="sr-only">
                {" "}
                — {title[lang]} {t.links.newTab}
              </span>
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
