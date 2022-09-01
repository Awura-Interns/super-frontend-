// import React from 'react'
// import '../Assets/styles/Navbar.css';
// import {Link}from'react-router-dom'
// const Navbar = ({ setShow, size }) => {
// // function Navbar() {
//     return (
//       <header className="header">
//       <div className="header-1">
     
//           {/* <Link to="#" className="logo"> <i className="fas fabook"></i> super_link </Link> */}
//           <div action="" className="search">
//               <input type="search" name="" placeholder="search here..." id="search-box"/>
//               <label htmlFor="search-box" className="fas fa-search"></label>
//           </div>
//           <div className="icons">
//               <div id="search-btn" className="fas fa-search"></div>
//               {/* <Link to="#" className="fas fa-heart"></Link> */}
//               {/* <Link to="#" className="fas fa-shopping-cart"></Link> */}
//               <nav>
//       <div className="nav_box">
//         <span className="my_shop" onClick={() => setShow(true)}>
//         <h1><b>super_link</b></h1>
//         </span>
//         <div className="cart" onClick={() => setShow(false)}>
//           <span>
//             <Link to="#" className="fas fa-cart-plus"></Link>
//           </span>
//           <span>{size}</span>
//         </div>
//       </div>
//     </nav>
//     <div id="login-btn" onClick='{{div_show}}' className="fas fa-user"></div>

              
       
        
//           </div>
//       </div>
//       <div className="header-2">
//           <nav className="navbar">
//               <h1>eheloch</h1>
//           </nav>
//       </div>
//   </header>   );
//   }
  
//   export default Navbar;
  
// /*import React, { useState, useEffect } from 'react';
// // eslint-disable-next-line
// import { Button } from '../Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';


// // function Navbar() {
//   const [click, setClick] = useState(false);
//   const [Button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav classNameNameNameName='navbar'>
//         <div classNameNameNameName='navbar-container'>
//           <Link to='/' classNameNameNameName='navbar-logo' onClick={closeMobileMenu}>
//             super_link
//             <i classNameNameName='fab fa-typo3' />
//           </Link>
//           <div classNameNameNameName='menu-icon' onClick={handleClick}>
//             <i classNameNameNameName={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul classNameNameNameName={click ? 'nav-menu active' : 'nav-menu'}>
//             <li classNameNameNameName='nav-item'>
//               <Link to='/' classNameNameNameName='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li classNameNameNameName='nav-item'>
//               <Link
//                 to='/services'
//                 classNameNameNameName='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li classNameNameNameName='nav-item'>
//               <Link
//                 to='/products'
//                 classNameNameNameName='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 classNameNameNameName='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
          
          
//            <button buttonStyle='btn--outline'>SIGN UP</button>
//            <Button/> 
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;*/