import React from 'react'
import '../Assets/styles/Navbar.css';
import {Link}from'react-router-dom'

function Navbar() {
    return (
      <header className="header">
      <div className="header-1">
          <Link to="#" className="logo"> <i className="fas fabook"></i> super_link </Link>
          <div action="" className="search">
              <input type="search" name="" placeholder="search here..." id="search-box"/>
              <label for="search-box" className="fas fa-search"></label>
          </div>
          <div className="icons">
              <div id="search-btn" className="fas fa-search"></div>
              <Link to="#" className="fas fa-heart"></Link>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <div id="login-btn" onclick="div_show()" className="fas fa-user"></div>
          </div>
      </div>
      <div className="header-2">
          <nav className="navbar">
              <h1>eheloch</h1>
          </nav>
      </div>
  </header>
    );
  }
  
  export default Navbar;
  
/*import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [Button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav classNameNameName='navbar'>
        <div classNameNameName='navbar-container'>
          <Link to='/' classNameNameName='navbar-logo' onClick={closeMobileMenu}>
            super_link
            <i classNameName='fab fa-typo3' />
          </Link>
          <div classNameNameName='menu-icon' onClick={handleClick}>
            <i classNameNameName={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul classNameNameName={click ? 'nav-menu active' : 'nav-menu'}>
            <li classNameNameName='nav-item'>
              <Link to='/' classNameNameName='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li classNameNameName='nav-item'>
              <Link
                to='/services'
                classNameNameName='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li classNameNameName='nav-item'>
              <Link
                to='/products'
                classNameNameName='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                classNameNameName='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
          
           <button buttonStyle='btn--outline'>SIGN UP</button>
           <Button/> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;*/