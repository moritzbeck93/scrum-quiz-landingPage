import H2 from "../layouts/h2";
import styles from "./Pricing.module.scss";
import Button from "../layouts/button";

import kite from "../../public/images/kite.png";
import rocket from "../../public/images/spaceship.png";
import drone from "../../public/images/drone.png";

const Pricing = () => {
  return (
    <>
      <div className={`${styles.container} container-fluid`}>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <H2 title="PACKAGES"></H2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1>Pricing Plans</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p>
              Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className={`${styles.cardTitle} card-title`}>
                  <H2 title="DEMO" fontSize="15px"></H2>
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={kite.src} alt="kite"></img>
                </div>
                <div>
                  <h1 className={styles.price}>FREE</h1>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <div className={styles.button}>
                  <Button
                    color="#f1b603"
                    fontSize="11px"
                    height="40px"
                    onClick={() => console.log("You clicked on the pink circle!")}
                    width="140px"
                    children="START NOW"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className={`${styles.cardTitle} card-title`}>
                  <H2 title="STARTER" fontSize="15px"></H2>
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={drone.src} alt="drone"></img>
                </div>
                <div>
                  <h1 className={styles.price}>10€</h1>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <div className={styles.button}>
                  <Button
                    color="#f1b603"
                    fontSize="11px"
                    height="40px"
                    onClick={() => console.log("You clicked on the pink circle!")}
                    width="140px"
                    children="START NOW"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className={`${styles.cardTitle} card-title`}>
                  <H2 title="ADVANCE" fontSize="15px"></H2>
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={rocket.src} alt="rocket"></img>
                </div>
                <div>
                  <h1 className={styles.price}>15€</h1>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <div className={styles.button}>
                  <Button
                    color="#f1b603"
                    fontSize="11px"
                    height="40px"
                    onClick={() => console.log("You clicked on the pink circle!")}
                    width="140px"
                    children="START NOW"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
