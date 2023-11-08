import ToastItem from "./ToasTItem";

const ToastList = ({ notifications }) => {
  const renderToasts = notifications.map((toast) => (
    <ToastItem key={toast.id} {...toast} />
  ));

  return <div>{renderToasts}</div>;
};

export default ToastList;
