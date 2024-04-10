import "./Comments.css";
import userIcon from "../../assets/img/gerard.png";
import LikeIcon from "../../assets/img/like.png";
import DislikeIcon from "../../assets/img/dislike.png";

const Comments = () => {
  return (
    <div className="comments__container">
      <div className="left__container">
        <img src={userIcon} alt="" />
      </div>
      <div className="right__container">
        <h4>
          @ochagwupaul1@gmail.com <span>3 months ago</span>
        </h4>
        <p>
          2024 who is still here listening .. Rest in peace mohad. 2024 who is
          still here listening .. Rest in peace mohad alsjfsllljslf
        </p>
        <div className="action__container">
          <div className="like__container">
            <img src={LikeIcon} alt="" /> 32k
          </div>
          <div className="like__container">
            <img src={DislikeIcon} alt="" /> 32k
          </div>
          <div className="like__container">
            reply
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
