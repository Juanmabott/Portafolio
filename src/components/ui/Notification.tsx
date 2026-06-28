interface NotificationProps {
  show: boolean;
  message: string;
}

const Notification = ({ show, message }: NotificationProps) => {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[200] animate-fade-in">
      {message}
    </div>
  );
};

export default Notification;
