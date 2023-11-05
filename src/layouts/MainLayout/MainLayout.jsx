import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";
import { Header } from "../../components/layout";
import ToastNotifications from "../../components/feedback/ToastNotifications/ToastNotifications";

import styles from "./styles.module.css";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <ToastNotifications />
    </Container>
  );
};

export default MainLayout;
