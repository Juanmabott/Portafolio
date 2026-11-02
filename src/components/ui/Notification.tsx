interface NotificationProps {
  show: boolean;
  message: string;
}

/** Toast breve. La región `status` queda siempre montada para que los lectores de pantalla la anuncien. */
const Notification = ({ show, message }: NotificationProps) => {
  return (
    <div className={`toast ${show ? "is-visible" : ""}`} role="status" aria-live="polite">
      {show ? message : ""}
    </div>
  );
};

export default Notification;
