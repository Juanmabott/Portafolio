import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { useLang } from "../../i18n/context";
import ProjectCard from "../ui/ProjectCard";
import { ExternalLinkIcon } from "../ui/icons";

const Projects = () => {
  const { t } = useLang();

  return (
    <section id="proyectos" className="section projects" aria-labelledby="proyectos-title">
      <h2 id="proyectos-title" className="section-title">
        {t.sections.projects}
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title.es} project={project} />
        ))}
      </div>

      <p className="projects-more">
        <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
          {t.projects.more}
          <ExternalLinkIcon />
          <span className="sr-only"> {t.links.newTab}</span>
        </a>
      </p>
    </section>
  );
};

export default Projects;
