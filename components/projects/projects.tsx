import H2 from "../layouts/h2";
import styles from "./Projects.module.scss";

import { BsArrowRight } from "react-icons/bs";

const project = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.headline}>
              <H2 title="Projects"></H2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.secondHeader}>We provide online training for:</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem
              ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem ipsum
            </p>
          </div>
        </div>
        <div className={`${styles.projectsName} row`}>
          <div className="col-4">
            <h2>Professional Product Owner™</h2>
          </div>
          <div className="col-4">
            <h2>Professional Scrum Master™ I</h2>
          </div>
          <div className="col-4">
            <h2>Professional Scrum Developer™</h2>
          </div>
        </div>
        <div className={`${styles.arrow} row`}>
          <div className="col-4">
            <p>coming soon</p>
          </div>
          <div className="col-4">
            <BsArrowRight />
          </div>
          <div className="col-4">
            <p>coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
