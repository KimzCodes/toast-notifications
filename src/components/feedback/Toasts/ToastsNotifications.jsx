import { useSelector } from "react-redux";
import ToastsList from "./ToastsList";

const ToastsNotifications = () => {
  const { notifications } = useSelector((state) => state.toasts);

  if (!notifications.length) {
    return <></>;
  }

  return (
    <div>
      <ToastsList notifications={notifications} />
    </div>
  );
};

export default ToastsNotifications;
