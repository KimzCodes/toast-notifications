import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes/AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
