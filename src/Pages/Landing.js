import React from "react";
import "../Assets/styles/landing.css";
import img from "../Assets/img/ss.jpg";
import img1 from "../Assets/img/farmer.jpg";
import img2 from "../Assets/img/farmer1.jpg";
import link from "../Assets/img/link.jpg";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
const Landing = () => {
  return (
    <body>
      <header>
        <div className="containers">
          <nav className="nav d-flex">
            <a href="#" className="logos">
              <img src="" alt="logo" />
            </a>
            <div className="burger">
              <div className="toggle-open">
                <img src="assets/images/toggle-open.svg" alt="toggle open" />
              </div>
              <div className="toggle-close">
                <img src="assets/images/toggle-close.svg" alt="toggle close" />
              </div>
            </div>
            <div className="navigation-bar">
              <ul>
                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About us </a>
                </li>
                <li>
                  <a href="#newsletter">contact us</a>
                </li>
                <li>
                  {/* <a href="#">sign up</a> */}
                  <NavLink to="/SignUp">
                  <i className="btns">Sign up</i>
                </NavLink>
                </li>
                {/* <li><a href="#" className="btns ">Login</a></li> */}
                {/* <NavLink to="/Login">
                  <i className="btns">Login</i>
                </NavLink> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="home d-flex" id="home">
          <img className="home-image" src={img1} alt="home" />
          <div className="containers">
            <div className="home-wrapper">
              <div className="col">
                <h1>
               
                  "The farmer has to be an optimist or he wouldn't still be a
                  farmer."
                </h1>

                <a href="#" className="btns">
                  view more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about " id="about">
          <div className="containers">
            <div className="aboutus-wrapper d-flex">
              <div className="aboutus-img">
                <img src={link} alt="about image" className="img-fluid" />
              </div>
              <div className="aboutus-content">
                <h2>About us</h2>
                <p>
                  Mauris pellentesque suscipit risus at porta. In lobortis orci
                  eget elit pellentesque imperdiet. Maecenas in nisl id erat
                  maximus tristique. Quisque egestas lacus ac commodo
                  pellentesque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  fermentum cursus tellus, vitae elementum lectus pulvinar
                  iaculis.
                </p>

                <a href="#" className="btns">
                  read more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter ptb-100" id="newsletter">
          <div className="containers">
            <div className="title-section">
              <h2>Contact us</h2>
              <p>Send us your email for more information.</p>
            </div>
            <div className="newsletter-wrapper d-flex">
              <input type="text" placeholder="Your email address..." />
              <a href="#" className="btns">
                Send
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </body>
  );
};

export default Landing;
