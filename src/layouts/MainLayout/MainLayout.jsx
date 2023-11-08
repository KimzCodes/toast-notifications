import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";
import { Header } from "../../components/layout";

import styles from "./styles.module.css";
import { ToastsNotifications } from "../../components/feedback";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <ToastsNotifications />
    </Container>
  );
};

export default MainLayout;
