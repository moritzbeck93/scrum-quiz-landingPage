import styles from "./Navigation.module.scss";
import Button from "../layouts/button";
import Image from "next/image";
import ellipse1 from "../../public/images/Ellipse1.png";
import logo from "../../public/images/scrum.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-6">
            <div>
              <img className={styles.ellipse1} src={ellipse1.src} alt="Ellipse" />
            </div>
            <div>
              <img className={styles.logo} src={logo.src} alt="Logo" />
            </div>
          </div>
          <div className="col-6">
            <Navbar className={styles.navbar} expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <a className={`${styles.navItem} nav-item nav-link`} href="#">
                      Projects
                    </a>
                    <a className={`${styles.navItem} nav-item nav-link`} href="#">
                      Blog
                    </a>
                    <a className={`${styles.navItem} nav-item nav-link`} href="#">
                      Scrum Quizzes
                    </a>
                    <form className={`${styles.loginButton} form-inline`}>
                      <Button
                        color="white"
                        height="40px"
                        onClick={() => console.log("You clicked on the pink circle!")}
                        width="100px"
                        children="Login"
                      ></Button>
                    </form>
                    <form className={`${styles.registerButton} form-inline`}>
                      <Button
                        color="#f1b603"
                        height="40px"
                        onClick={() => console.log("You clicked on the pink circle!")}
                        width="100px"
                        children="Register"
                      ></Button>
                    </form>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
