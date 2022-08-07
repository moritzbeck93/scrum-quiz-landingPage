import styles from "./Navigation.module.scss";
import Button from "../layouts/button";
import Image from "next/image";
import ellipse1 from "../../public/images/Ellipse1.png";
import logo from "../../public/images/scrum.png";

const Navigation = () => {
  return (
    <>
      <div className={styles.ellipse}>
        <Image src={ellipse1} alt="Ellipse" />
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Ellipse" />
      </div>
      <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
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
            <a className="nav-item nav-link" href="#"></a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
