import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { useLang } from "../../i18n/context";
import { ExternalLinkIcon } from "../ui/icons";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <span>{profile.name}</span>
      <span aria-hidden="true">·</span>
      <span>{t.footer.madeWith}</span>
      <span aria-hidden="true">·</span>
      <a href={site.repo} target="_blank" rel="noopener noreferrer">
        {t.footer.source}
        <ExternalLinkIcon />
        <span className="sr-only"> {t.links.newTab}</span>
      </a>
    </footer>
  );
};

export default Footer;
