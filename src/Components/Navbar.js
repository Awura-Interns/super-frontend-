import React from 'react' ;
import "../Assets/styles/Navbar.css" ;

function Navbar() {
  return (
    <header class="header">
    <div class="header-1">
        <a href="#" class="logo"> <i class="fas fabook"></i> super_link </a>
        <div action="" class="search">
            <input type="search" name="" placeholder="search here..." id="search-box"/>
            <label for="search-box" class="fas fa-search"></label>
        </div>
        <div class="icons">
            <div id="search-btn" class="fas fa-search"></div>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
            <div id="login-btn" onclick="div_show()" class="fas fa-user"></div>
        </div>
    </div>
    <div class="header-2">
        <nav class="navbar">
            <h1>eheloch</h1>
        </nav>
    </div>
</header>

  )
}

export default Navbar;