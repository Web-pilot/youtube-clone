import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import searchIcon from "../../assets/img/search.png";
import userProfile from "../../assets/img/user_profile.jpg"
import uploadImage from "../../assets/img/upload.png"
import MenuIcon from "../../assets/img/menu.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        {/* logo */}
        <div className="logo">
          <a href="#">
            {" "}
            <img src={logo} alt="" />
          </a>
        </div>

        {/* search box */}
        <div className="search__box">
          <div className="search">
            <input type="text" placeholder="search for video" />
            <img src={searchIcon} alt="" className="search__icon__img" />
          </div>
        </div>

        <div className="user__container">
          <img src={uploadImage} alt="user image" className="upload__icon" />
          <img src={userProfile} alt="user image" className="user__icon" />
          <img src={MenuIcon} alt="" className="menu__icon"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar