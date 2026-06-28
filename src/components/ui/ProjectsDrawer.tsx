import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import "./ProjectsDrawer.css";

interface ProjectsDrawerProps {
  open: boolean;
  onClose: () => void;
}

/** Panel que se expande por fuera, a la derecha del panel principal, con su misma altura. */
const ProjectsDrawer = ({ open, onClose }: ProjectsDrawerProps) => {
  return (
    <aside className={`projects-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="drawer-fill">
        <div className="drawer-head">
          <h2>Mis Proyectos</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Cerrar proyectos">
            ×
          </button>
        </div>

        <div className="drawer-body">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProjectsDrawer;
