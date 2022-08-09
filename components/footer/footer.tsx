import styles from "./Footer.module.scss";
import logo from "../../public/images/scrum.png";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer} container-fluid`}>
        <div className="row pt-5">
          <div className="col-4 d-flex justify-content-center">
            <img src={logo.src} alt=".."></img>
          </div>
          <div className="col-4">
            <ul>
              <li className={styles.firstLi}>Company</li>
              <li>Give Feedback</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className={styles.firstLi}>Social</li>
              <li>Follow us on Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center pt-3">
            <div className={styles.line}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <p className={styles.legal}>©2022 Scrum Master. All rights reserverd | Terms of Use | Imprint & Privacy Policy </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
