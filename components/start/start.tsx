import style from "./Start.module.scss";
import ellipse from "../../public/images/Ellipse3.png";
import team from "../../public/images/team.png";
import H2 from "../layouts/h2";

const Start = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className={style.parent}>
              <div className={style.children}>
                <img className={style.ellipse} src={ellipse.src}></img>
              </div>
              <div className={style.childrenTeam}>
                <img className={style.team} src={team.src}></img>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={style.headline}>
              <H2 title="SCRUM"></H2>
            </div>
            <h1 className={style.headline2}>
              Become a certified Scrum Master and help your team thrive
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem
              ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem ipsum
              dolor sit amet consectur adispscing elit, sed do eiu smod tempor Lorem ipsum dolor sit
              amet consectur adispscing elit, sed do eiu smod tempor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
