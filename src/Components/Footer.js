import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../Assets/styles/footer.css";
// import { Button } from './Button';
import Diamond from "../Assets/img/question.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-[90px] py-20">
        <div className="container">
          <div className="flex w-full justify-end pr-32 pb-5">
            <Link to="/Help">
              <Icon icon="carbon:help-filled" className="text-7xl" />
            </Link>
          </div>
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="#">about us</Link>
                </li>
                <li>
                  <Link to="#">our services</Link>
                </li>
                <li>
                  <Link to="#">privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="#">shipping</Link>
                </li>
                <li>
                  <Link to="#">returns</Link>
                </li>
                <li>
                  <Link to="#">order status</Link>
                </li>
                <li>
                  <Link to="#">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <Link to="#">+251927272893</Link>
                </li>
                <li>
                  <Link to="#">super_link@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <Link to={"/Help"}>
        <section className="scrollup show" id="html">
          <img src={Diamond} alt="arrow up" />
        </section>{" "}
      </Link> */}
    </>
  );
}
