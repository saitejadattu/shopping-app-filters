import React from "react";
import "./index.css";

const NavBar = () => {
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
      </nav>
    
  );
};

export default NavBar;
