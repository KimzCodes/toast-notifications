const ToastItem = ({ title, message }) => {
  return (
    <div>
      <h6>{title}</h6>
      <p>{message}</p>
      <button className="btn-close"></button>
    </div>
  );
};

export default ToastItem;
