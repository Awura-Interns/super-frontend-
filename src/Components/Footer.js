import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../Assets/styles/footer.css";
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-[90px] py-20">
        <div className="container">
          <div className="flex w-full justify-end pr-32 pb-5">
            <Link to="/Help">
              <Icon icon="carbon:help-filled" className="text-7xl" />
            </Link>
          </div>
          <div className="flex flex-wrap">
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
              <div className="flex social-links">
                <Link to="#" 
                style={{
                  borderRadius:"100%",
                  // border:"1px dashed green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                >
                  <FaFacebook  color="white" size={30}/>
                </Link>
                <Link to="#" 
                style={{
                  borderRadius:"100%",
                  // border:"1px dashed green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                >
                <FaTwitter  color="white" size={30}/>
                </Link>
                <Link to="#" 
                style={{
                  borderRadius:"100%",
                  // border:"1px dashed green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                >
                <FaInstagram  color="white" size={30}/>
                </Link>
                <Link to="#" 
                style={{
                  borderRadius:"100%",
                  // border:"1px dashed green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                >
                <FaLinkedinIn  color="white" size={30}/>
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
    </div>
  );
}
