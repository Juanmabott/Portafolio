import ProfileImage from "../ui/ProfileImage";
import { profile } from "../../data/profile";

interface HeaderProps {
  onCopyEmail: (email: string) => void;
}

const Header = ({ onCopyEmail }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-inner">
        <ProfileImage />

        <div className="header-text">
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>

          <div className="contact-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link linkedin"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                alt="LinkedIn"
                width="18"
                height="18"
              />
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link github"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width="18"
                height="18"
              />
              GitHub
            </a>

            <div className="email-group">
              <button onClick={() => onCopyEmail(profile.email)} className="contact-link email">
                📧 Correo
              </button>

              <button
                onClick={() => onCopyEmail(profile.email)}
                className="copy-button"
                title="Copiar email"
                aria-label="Copiar email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
