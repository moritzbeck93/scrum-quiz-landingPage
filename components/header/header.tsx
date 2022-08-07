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
          <div className="col-4">
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
            <div className={styles.imageContainer}>
            <img className={styles.ellipse}src={ellipse2.src} alt="Ellipse"></img>
            </div>
            <div className={styles.overlay}>
            <img src={headerMain.src} className={styles.mainPicture} alt="Scrum Mock Picture"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
