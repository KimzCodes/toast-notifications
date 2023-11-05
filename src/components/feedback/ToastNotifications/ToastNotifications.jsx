import { useSelector } from "react-redux";
import ToastList from "./ToastList";

const ToastNotifications = () => {
  const { toasts } = useSelector((state) => state.toasts);
  if (!toasts.length) return <></>;
  return (
    <>
      <ToastList toasts={toasts} />
    </>
  );
};

export default ToastNotifications;
