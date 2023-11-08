import ToastItem from "./ToastItem";

const ToastsList = ({ notifications }) => {
  const renderToasts = notifications.map((toast) => (
    <ToastItem key={toast.id} {...toast} />
  ));
  return <div>{renderToasts}</div>;
};

export default ToastsList;
