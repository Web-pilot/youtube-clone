import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Comments from "../../components/comments/Comments";
import Recommended from "../../components/recommended/Recommended";
import "./Video.css";

const Video = () => {
  return (
    <div className="container video__page__container ">
        <PlayVideo />
        <Recommended />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
    </div>
  )
}

export default Video