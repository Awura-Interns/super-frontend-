import React from 'react'
import {Link}from'react-router-dom'

import '../Assets/styles/landingpage.css';

export default function landingpage() {
  return (
    <React.Fragment>
      
        <header className="header">

<div className="header-1">
    
    <Link to="#" className="logo"> <i className="fas fabook"></i> super_link </Link>



    <div className="icons">

        <Link to="/Cards" className="btn">Get start</Link>
        <Link to='/Signup' className="btn">Sign Up</Link>
        <Link to='/'>landing</Link>
        <Link to='/Profile'>Profile</Link>
        <Link to='/Signin'>Signin</Link>

       
        <Link to='/Account'>Account</Link>
         <Link to='/Cart'>Cart</Link>
    </div>

</div>
</header>
<div className="heading">
<h3>Welcome To</h3>
<p><Link to="">Super link</Link> <span></span></p>
</div>



<section className="about">

<div className="row">

<div className="image">
 <img src="/assets/spuer_image/shop.png" alt=""/>
</div>

<div className="content">
 <h3>why choose us?</h3>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, neque debitis incidunt qui ipsum sed doloremque a molestiae in veritatis ullam similique sunt aliquam dolores dolore? Quasi atque debitis nobis!</p>
 <Link to="menu.html" className="btn">Get start</Link>
</div>

</div>

</section>

<div className="heading">

</div>


    </React.Fragment>
  )
}
