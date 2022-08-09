import H2 from "../layouts/h2";
import styles from "./Blog.module.scss";
import blogPost from "../../public/images/scrumPlanning.png";
import Button from "../layouts/button";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <H2 title="Blog"></H2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1>Latest Articles</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className={`${styles.card} card`}>
              <img className="card-img-top" src={blogPost.src} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">How to prepare for the PSM Exam</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    color="white"
                    fontSize="11px"
                    height="40px"
                    onClick={() => console.log("You clicked on the pink circle!")}
                    width="140px"
                    children="Read more"
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

export default Blog;
