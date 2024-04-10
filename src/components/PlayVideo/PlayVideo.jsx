import "./PlayVideo.css";
import video from "../../assets/img/video.mp4"
import Tom from "../../assets/img/tom.png";
import LikeIcon from "../../assets/img/like.png"
import DislikeIcon from "../../assets/img/dislike.png"
import ShareIcon from "../../assets/img/share.png"

const PlayVideo = () => {
  return (
    <div className="playvideo__container ">
      <div className="video__container">
        <video src={video} autoPlay controls></video>
        <h2>Trace session with Mohbad until he's dead </h2>
        <div className="action__container">
            <div className="left__container">
                <img src={Tom} alt="" />
                <div className="channel__title">
                    <h3>Tracenaija</h3>
                    <p>32.3k Subscribers</p>
                </div>
                <button className="btn">Subscribe</button>
            </div>
            <div className="right__container">
                <div className="like__container">
                    <img src={LikeIcon} alt="" /> 32k
                </div>
                <div className="dislike__container">
                    <img src={DislikeIcon} alt="" /> 0
                </div>
                <div className="share__container">
                    <img src={ShareIcon} alt="" /> Share
                </div>
            </div>
        </div>
        <hr />
        <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit accusamus quia beatae quibusdam aliquid eaque itaque explicabo quis. Quae repellat ipsa quas dolores totam, placeat repudiandae. Recusandae dicta repudiandae quidem veniam a illo consectetur est, nisi, minus earum culpa dolor non eius nam amet doloribus deleniti tempora possimus aperiam doloremque voluptatibus suscipit. Quasi laudantium est amet ut incidunt eaque asperiores. Dolore voluptate id aspernatur iste nobis quos doloribus ut quibusdam molestiae sint ipsa sit dolor tempore libero minima ad eveniet, cum labore, veritatis nulla quaerat hic? Qui quasi minima nam maxime sit, sequi aspernatur recusandae maiores! Explicabo, a sed.
        </div>
      </div>
    </div>
  );
}

export default PlayVideo