import { useSelector } from "react-redux";
import ToastList from "./ToastList";

const ToastNotifications = () => {
  const { notifications } = useSelector((state) => state.toasts);
  if (!notifications.length) return <></>;
  return (
    <>
      <ToastList notifications={notifications} />
    </>
  );
};

export default ToastNotifications;
