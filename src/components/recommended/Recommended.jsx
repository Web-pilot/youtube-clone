import "./Recommended.css";
import thumbnail from "../../assets/img/thumbnail2.png";

const Recommended = () => {
  return (
    <div className="recommended__container">
      <div className="flex__container">
        <a href="" className="thumbnail">
          <div className="recommended__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <h3>Portable on curiosity make me ask!</h3>
            <p>Reality Channel</p>
            <p>
              <span>722K views . </span>
              <b>2 month ago</b>
              <span></span>
            </p>
          </div>
        </a>
        <a href="" className="thumbnail">
          <div className="recommended__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <h3>Portable on curiosity make me ask!</h3>
            <p>Reality Channel</p>
            <p>
              <span>722K views . </span>
              <b>2 month ago</b>
              <span></span>
            </p>
          </div>
        </a>
        <a href="" className="thumbnail">
          <div className="recommended__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <h3>Portable on curiosity make me ask!</h3>
            <p>Reality Channel</p>
            <p>
              <span>722K views . </span>
              <b>2 month ago</b>
              <span></span>
            </p>
          </div>
        </a>
        <a href="" className="thumbnail">
          <div className="recommended__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <h3>Portable on curiosity make me ask!</h3>
            <p>Reality Channel</p>
            <p>
              <span>722K views . </span>
              <b>2 month ago</b>
              <span></span>
            </p>
          </div>
        </a>
      
      </div>
    </div>
  );
};

export default Recommended;
