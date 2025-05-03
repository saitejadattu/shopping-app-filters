import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
const NavBar = ({sendingToHome}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSearchPopup, setSearchShowPopup] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchShowPopup((prev) => !prev);
  };
  const handleClose = () => {
    setSearchShowPopup(false);
    setSearchText(""); // optional: clear input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendingToHome(searchText);
    handleClose();
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    Cookie.remove("jwtToken");
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
            <button className="empty-button" onClick={handleSearchClick}>
              <img
                src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1733881900/search-normal_qpeiil.png"
                alt="search"
              />
            </button>
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
      {showSearchPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="popup-input"
                placeholder="Type your search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="popup-actions">
                <button
                  type="button"
                  className="popup-button cancel"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="popup-button submit">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
