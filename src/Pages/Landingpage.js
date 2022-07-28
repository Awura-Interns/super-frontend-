import React from 'react'
import {Link}from'react-router-dom'
import Cards from 'react'
import '../Assets/styles/landingpage.css';

export default function landingpage() {
  return (
    <React.Fragment>
      
        <header class="header">

<div class="header-1">
    
    <Link to="#" class="logo"> <i class="fas fabook"></i> super_link </Link>



    <div class="icons">

        <Link to="/Cards" class="btn">Get start</Link>
        <Link to='/Signup' class="btn">Sign Up</Link>
        <Link to='/'>landing</Link>
        <Link to='/Profile'>Profile</Link>
        <Link to='/Signin'>Signin</Link>

       
        <Link to='/Account'>Account</Link>
         <Link to='/Cart'>Cart</Link>
    </div>

</div>
</header>
<div class="heading">
<h3>Welcome To</h3>
<p><Link to="">Super link</Link> <span></span></p>
</div>



<section class="about">

<div class="row">

<div class="image">
 <img src="/assets/spuer_image/shop.png" alt=""/>
</div>

<div class="content">
 <h3>why choose us?</h3>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, neque debitis incidunt qui ipsum sed doloremque a molestiae in veritatis ullam similique sunt aliquam dolores dolore? Quasi atque debitis nobis!</p>
 <Link to="menu.html" class="btn">Get start</Link>
</div>

</div>

</section>

<div class="heading">

</div>


    </React.Fragment>
  )
}
