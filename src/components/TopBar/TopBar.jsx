import { FaBell } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../../assets/logo music.svg";
import artist3 from "../../assets/fav/1.svg";
import "./styles.scss";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-image-logo-wrapper">
        <div className="topbar-image-logo-wrapper-image">
          <img style={{width: '30px'}}src={Logo} alt="" />
        </div>
        <div className="topbar-image-logo-wrapper-name">TuneAI</div>
      </div>
      <div  className="topbar-details-wrapper">
        <FaBell size={24}/>
        <div className="topbar-details-wrapper-avatar">
          <FaChevronDown size={24}/>
          <div className="topbar-details-wrapper-avatar-name">
            <h4>Priya Sonar</h4>
            <h6>Your Profile</h6>
          </div>
          <img src={artist3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
