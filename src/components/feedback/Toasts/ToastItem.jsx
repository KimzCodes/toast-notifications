import styles from "./styles.module.css";

const ToastItem = ({ title, message, type }) => {
  return (
    <div className={`alert alert-${type} ${styles.toastItem}`}>
      <h6>{title}</h6>
      <p>{message}</p>
      <button className="btn btn-close" />
    </div>
  );
};

export default ToastItem;
