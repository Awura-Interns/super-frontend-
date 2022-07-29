import React from "react";
import "../Assets/styles/profile.css";
import '../Assets/styles/signin.css'
import {Link}from'react-router-dom'
export default function Profile() {
  return (
    <body>


    
    <div className="wrapper1">
        <div className="navbar">
            <div className="logo">
                <Link to="#">Super_link</Link>
            </div>

            <div action="" className="search">
                <input type="search" name="" placeholder="search here..." id="search-box"/>
                <label for="search-box" className="fas fa-search"></label>
            </div>
            <div className="nav_right">
                <ul>
                    <li className="nr_li">
                        <i className="fas fa-shopping-cart"></i>
                    </li>
                    <li className="nr_li">
                        <i className="fas fa-envelope-open-text"></i>
                    </li>

                    <li className="nr_li dd_main">
                        <img src="/spuer_image/profile.jpg" alt="profile_img"/>
                        
                        <div className="dd_menu">
                           
                            <div className="dd_right">
                                <ul>
                                    <li><i className="fas fa-map-marker-alt"></i>your order</li>
                                    <li><i className="far fa-star"></i>your payment</li>
                                    <li><i className="fas fa-cog"></i>your profiles</li>
                                    <li><i className="fas fa-download"></i>your list </li>
                                    <li><i className="fas fa-sign-out-alt"></i>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>	


<div className="wrapper">
<div className="links">
    <ul>
        <li data-view="list-view" className="li-list active">
        Manage your profiles</li>
    
    </ul>
</div>
<div className="view_main">
    {/* <div className="view_wrap list-view" style="display: block;"> */}
    <div className="view_wrap list-view" >
        <div className="view_item">
            <div className="vi_right">
                <p className="title">Abyssinia Negede</p>
                <p className="content">Account holder</p>
        
                <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </div>
        </div>
        <div className="view_item">
            
            <div className="vi_right">
                <p className="title">contact Detail</p>
                <p className="content">Receive important alerts and information!</p>

                <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </div>
        </div>
        <div className="view_item">
        
            <div className="vi_right">
                <p className="title">Other settings</p>
                <p className="content">correct anything you want</p>

                <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </div>
        </div>
        
    

    </div>
</div>
</div>








</body>
  );
}
