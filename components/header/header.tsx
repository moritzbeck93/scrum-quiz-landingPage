import Image from "next/image";

import H2 from "../layouts/h2";
import styles from "./Header.module.scss";
import Button from "../layouts/button";
import ellipse2 from "../../public/images/Ellipse2.png";
import headerMain from "../../public/images/headerMain.png";

const Header = () => {
  return (
    <>
      <div className={`${styles.header} container-fluid ml-5`}>
        <H2 title="Scrum Master"></H2>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <h1>
              Prepare for Scrum<br></br>Master Certification
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem
              ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem ipsum
              dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem ipsum dolor sit
              amet consectur adispscing elit, sed do eiu smod tempor
            </p>
            <div>
              <Button
                color="#f1b603"
                fontSize="11px"
                height="40px"
                onClick={() => console.log("You clicked on the pink circle!")}
                width="140px"
                children="REGISTER NOW!"
              ></Button>
              <Button
                color="white"
                fontSize="11px"
                marginLeft="10px"
                height="40px"
                onClick={() => console.log("You clicked on the pink circle!")}
                width="140px"
                children="FREE ONLINE TEST"
              ></Button>
            </div>
          </div>
          <div className="col-8">
            <div className={styles.parent}>
              <div className={styles.children}>
                <img className={styles.ellipse} src={ellipse2.src}></img>
              </div>
              <div className={styles.childrenTeam}>
                <img className={styles.team} src={headerMain.src}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
