import { cvUrl, profile } from "../../data/profile";
import { useLang } from "../../i18n/context";
import EmailActions from "../ui/EmailActions";
import { DownloadIcon, LinkedInIcon, MailIcon } from "../ui/icons";

interface ContactProps {
  onCopyEmail: () => void;
}

const Contact = ({ onCopyEmail }: ContactProps) => {
  const { lang, t } = useLang();
  const cv = cvUrl(lang);

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-title">
      <h2 id="contacto-title" className="section-title">
        {t.sections.contact}
      </h2>
      <p className="contact-text">{t.contact.text}</p>

      <div className="contact-actions">
        <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
          <MailIcon />
          {t.contact.sendEmail}
        </a>
        <a
          className="btn btn-secondary btn-lg"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
          <span className="sr-only"> {t.links.newTab}</span>
        </a>
        {cv && (
          <a className="btn btn-secondary btn-lg" href={cv} download>
            <DownloadIcon />
            {t.hero.downloadCv}
          </a>
        )}
      </div>

      <EmailActions onCopy={onCopyEmail} />
    </section>
  );
};

export default Contact;
