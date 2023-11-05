import ToastItem from "./ToasTItem";

const ToastList = ({ toasts }) => {
  const renderToasts = toasts.map((toast) => (
    <ToastItem key={toast.id} {...toast} />
  ));

  return <div>{renderToasts}</div>;
};

export default ToastList;
