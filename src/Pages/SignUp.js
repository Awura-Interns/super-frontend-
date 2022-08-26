import React from "react";
import "../Assets/styles/signup.css";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <header className="headers">
        <div className="header-1">
		  <a>
		  <NavLink id="login-btn" to="/">
            <i className="fa-thin fa-arrow-left"></i>
          </NavLink>
		  </a>
        </div>
      </header>
      <div className="box-form">
        <div className="right">
          <h5>Sign Up</h5>
          <div className="inputs">
            <input type="text" placeholder="frist name" />
            <input type="text" placeholder="last name" />
            <input type="email" placeholder="email" />
            <input type="tel" placeholder="phone" />
            <input type="text" placeholder="address" />

            <input type="password" placeholder="password" />
          </div>

          <button>Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
