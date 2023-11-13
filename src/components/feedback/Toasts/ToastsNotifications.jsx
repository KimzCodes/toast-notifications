import { useSelector } from "react-redux";
import ToastsList from "./ToastsList";

import styles from "./styles.module.css";

const ToastsNotifications = () => {
  const { notifications } = useSelector((state) => state.toasts);

  if (!notifications.length) {
    return <></>;
  }

  return (
    <div className={styles.toastsContainer} id="toastsNotifications">
      <ToastsList notifications={notifications} />
    </div>
  );
};

export default ToastsNotifications;
