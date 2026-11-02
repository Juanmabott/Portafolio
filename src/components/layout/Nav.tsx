import { experience } from "../../data/experience";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLang } from "../../i18n/context";
import { LayersIcon } from "../ui/icons";
import LanguageToggle from "../ui/LanguageToggle";
import "./Nav.css";

interface NavProps {
  skillsOpen: boolean;
  skillsControls: string;
  onOpenSkills: () => void;
}

const Nav = ({ skillsOpen, skillsControls, onOpenSkills }: NavProps) => {
  const { t } = useLang();

  const links = [
    { id: "sobre-mi", label: t.nav.about },
    ...(experience.length > 0 ? [{ id: "experiencia", label: t.nav.experience }] : []),
    { id: "proyectos", label: t.nav.projects },
    { id: "contacto", label: t.nav.contact },
  ];
  const active = useActiveSection(links.map((link) => link.id));

  return (
    <nav className="site-nav" aria-label={t.nav.label}>
      <a href="#top" className="nav-brand" aria-label={t.nav.home}>
        JM
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} aria-current={active === link.id ? "location" : undefined}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="nav-skills"
            onClick={onOpenSkills}
            aria-controls={skillsControls}
            aria-expanded={skillsOpen}
          >
            <LayersIcon />
            {t.nav.skills}
          </button>
        </li>
      </ul>

      <LanguageToggle />
    </nav>
  );
};

export default Nav;
