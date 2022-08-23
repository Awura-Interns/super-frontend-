import React from "react";
import { Link } from "react-router-dom";
import "../Assets/styles/landingpage.css";
import im1 from "../Assets/img/shop.png";

export default function landingpage() {
  return (
    <main>
      <header className="header py-4">
        <div className="header-1">
          <a href="#" className="logo">
            {" "}
            <i className="fas fabook"></i> super_link{" "}
          </a>
          <div className="icons">
            <Link to="Home" className="bg-gray-800 text-white text-3xl p-5">
              Get start
            </Link>
            <a href="signup" className="bg-gray-800 text-white text-3xl p-5">
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center min-h-screen bg-gray-200 py-10">
        <div className="flex justify-between h-60 px-44">
          <img src={im1} />
          <img src={im1} />
        </div>
        <p className="text-7xl mb-20">Supper_Link</p>
        <div className="flex flex-col items-center text-5xl gap-3">
          <p className="">IF YOU LOVE IT,</p>
          <p> BUY IT.</p>
          <img src={im1} className="h-[100px] w-[300px]" />
          <p>Before someone else does</p>
        </div>
      </div>
    </main>
  );
}
