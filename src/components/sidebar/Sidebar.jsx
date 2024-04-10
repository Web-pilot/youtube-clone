import "./Sidebar.css";
import HomeIcon from "../../assets/img/home.png";
import GameIcon from "../../assets/img/game_icon.png";
import Automobile from "../../assets/img/automobiles.png";
import SportIcon from "../../assets/img/sports.png";
import EntertainmentIcon from "../../assets/img/entertainment.png";
import TechnologyIcon from "../../assets/img/tech.png";
import MusicIcon from "../../assets/img/music.png";
import BlogIcon from "../../assets/img/blogs.png";
import NewsIcon from "../../assets/img/news.png";
import Tom from "../../assets/img/tom.png"

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="links">
        <ul className="links__item__container">
          <li className="active">
            <img src={HomeIcon} alt="" /> <p>Home</p>
          </li>
          <li>
            <img src={GameIcon} alt="" /> <p>Gaming</p>
          </li>
          <li>
            <img src={Automobile} alt="" /> <p>Automobiles</p>
          </li>
          <li>
            <img src={SportIcon} alt="" /> <p>Sports</p>
          </li>
          <li>
            <img src={EntertainmentIcon} alt="" /> <p>Entertainment</p>
          </li>
          <li>
            <img src={TechnologyIcon} alt="" /> <p>Technology</p>
          </li>
          <li>
            <img src={MusicIcon} alt="" /> <p>Music</p>
          </li>
          <li>
            <img src={BlogIcon} alt="" /> <p>Blogs</p>
          </li>
          <li>
            <img src={NewsIcon} alt="" /> <p>News</p>
          </li>
        </ul>
      </div>
      <hr />

      <div className="subscribed__container">
        <h5>Subscribed</h5>
        <ul className="links__item__container">
          <li >
            <img src={Tom} alt=""  className="subscibed__channel__thumb" /> <p>Nas Daily</p>
          </li>
          <li >
            <img src={Tom} alt=""  className="subscibed__channel__thumb" /> <p>Nas Daily</p>
          </li>
          <li >
            <img src={Tom} alt=""  className="subscibed__channel__thumb" /> <p>Nas Daily</p>
          </li>
          <li >
            <img src={Tom} alt=""  className="subscibed__channel__thumb" /> <p>Nas Daily</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
