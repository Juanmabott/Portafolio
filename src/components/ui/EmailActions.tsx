import { profile } from "../../data/profile";
import { useLang } from "../../i18n/context";
import { CopyIcon, MailIcon } from "./icons";

interface EmailActionsProps {
  onCopy: () => void;
}

/** Email visible (abre el cliente de correo) + botón para copiarlo, como una sola pastilla. */
const EmailActions = ({ onCopy }: EmailActionsProps) => {
  const { t } = useLang();

  return (
    <div className="email-group">
      <a href={`mailto:${profile.email}`} className="chip-link email-link">
        <MailIcon />
        <span>{profile.email}</span>
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="copy-button"
        title={t.links.copyEmail}
        aria-label={t.links.copyEmail}
      >
        <CopyIcon />
      </button>
    </div>
  );
};

export default EmailActions;
