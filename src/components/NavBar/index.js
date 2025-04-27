import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookie.remove("jwtToken");
    navigate("/login");
    setShowPopup(false);
  };
  return (
    <nav className="nav-bar-container">
      <ul className="logos-and-menu-container">
        <li className="logo-image">
          <img
            src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733881329/Logo_rnrkuk.png"
            alt="logo"
          />
        </li>
        <li className="logo">
          <h1 className="logo-heading">LOGO</h1>
        </li>

        <ul className="unordered-list">
          <li>
            <img
              src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733881900/search-normal_qpeiil.png"
              alt="search"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733881957/heart_p1tcxs.png"
              alt="heart"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733882068/shopping-bag_zkolwr.png"
              alt="shopping"
            />
          </li>
          <li>
            <img
              onClick={() => setShowPopup(true)}
              src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733882114/profile_kzcb9r.png"
              alt="profile"
            />
          </li>
          <select>
            <option>ENG</option>
          </select>
        </ul>
      </ul>
      <ul className="menu-info-un-ordered-container">
        <li className="menu-info">SHOP</li>
        <li className="menu-info">SKILLS</li>
        <li className="menu-info">STORIES</li>
        <li className="menu-info">ABOUT</li>
        <li className="menu-info">CONTACT US</li>
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to logout?</p>
            <div className="popup-actions">
              <button
                className="cancel-button"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button className="confirm-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
