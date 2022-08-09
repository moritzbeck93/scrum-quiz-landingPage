import H2 from "../layouts/h2";
import styles from "./Reviews.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { BsFillStarFill } from "react-icons/bs";
import { renderToHTML } from "next/dist/server/render";

function renderStars() {
  return [...Array(5)].map((elementInArray, index) => (
    <div className="" key={index}>
      <BsFillStarFill></BsFillStarFill>
    </div>
  ));
}

const Reviews = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <H2 title="REVIEWS"></H2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1>Happy clients say about us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
              <SwiperSlide>
                <div className={`${styles.card} card`}>
                  <div className="card-body">
                    <h5 className={`${styles.cardTitle} card-title`}>{renderStars()}</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor{" "}
                    </p>
                    <p>John Doe, Testuser</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} card`}>
                  <div className="card-body">
                    <h5 className={`${styles.cardTitle} card-title`}>{renderStars()}</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor{" "}
                    </p>
                    <p>John Doe, Testuser</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} card`}>
                  <div className="card-body">
                    <h5 className={`${styles.cardTitle} card-title`}>{renderStars()}</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor
                      Lorem ipsum dolor sit amet consectur adispscing elit, sed do eiu smod tempor{" "}
                    </p>
                    <p>John Doe, Testuser</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
