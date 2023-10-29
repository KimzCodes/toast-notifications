import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { HeaderBasket } from "../../ecom";
import styles from "./styles.module.css";

const { header, headerContent, headerLogo } = styles;

const Header = () => {
  return (
    <div className={header}>
      <div className={headerContent}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link>About us</Nav.Link>
              <Nav.Link>FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>login</Nav.Link>
              <Nav.Link eventKey={2}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
