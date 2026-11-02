import ProfileImage from "../ui/ProfileImage";
import EmailActions from "../ui/EmailActions";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LayersIcon, LinkedInIcon } from "../ui/icons";
import { cvUrl, profile } from "../../data/profile";
import { useLang } from "../../i18n/context";
import "./Header.css";

interface HeaderProps {
  skillsOpen: boolean;
  skillsControls: string;
  onOpenSkills: () => void;
  onCopyEmail: () => void;
}

const Header = ({ skillsOpen, skillsControls, onOpenSkills, onCopyEmail }: HeaderProps) => {
  const { lang, t } = useLang();
  const cv = cvUrl(lang);

  return (
    <header className="hero">
      <ProfileImage alt={t.hero.photoAlt} />

      <div className="hero-text">
        {profile.availability && (
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            {profile.availability[lang]}
          </p>
        )}

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role[lang]}</p>
        <p className="hero-stack">{profile.stack}</p>

        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">
            {t.hero.viewProjects}
            <ArrowRightIcon />
          </a>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onOpenSkills}
            aria-controls={skillsControls}
            aria-expanded={skillsOpen}
          >
            <LayersIcon />
            {t.hero.viewSkills}
          </button>
          {cv && (
            <a href={cv} className="btn btn-secondary" download>
              <DownloadIcon />
              {t.hero.downloadCv}
            </a>
          )}
        </div>

        <div className="social-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="chip-link"
          >
            <LinkedInIcon />
            LinkedIn
            <span className="sr-only"> {t.links.newTab}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chip-link"
          >
            <GitHubIcon />
            GitHub
            <span className="sr-only"> {t.links.newTab}</span>
          </a>
          <EmailActions onCopy={onCopyEmail} />
        </div>
      </div>
    </header>
  );
};

export default Header;
