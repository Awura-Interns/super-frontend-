import React from "react";
import "../Assets/styles/Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <headers className="headers">
      <div className="header-1">
        <a href="#" className="logo">
          {" "}
          <i className="fas fabook"></i> super_link{" "}
        </a>
        <div action="" className="search">
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <label for="search-box" className="fas fa-search"></label>
        </div>
        <div className="icons">
          <div id="search-btn" className="fas fa-search"></div>
          <NavLink id="login-btn" to="/Home/MyOrder">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
          <NavLink id="login-btn" to="/Home/MyProfile">
            <i className="fas fa-user"></i>
          </NavLink>
        </div>
      </div>
      <div className="header-2">
        <navb className="navbars">
          <h1>S____________L</h1>
        </navb>
      </div>
    </headers>
  );
}

export default Navbar;
