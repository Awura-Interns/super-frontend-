import React from "react";
import "../Assets/styles/profile.css";
import '../Assets/styles/signin.css'
import {Link}from'react-router-dom'
export default function Profile() {
  return (
    <body>
	


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
                <p className="title">bitaniya</p>
                <p className="content">Account holder</p>
                <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </div>
        </div>
        <div className="view_item">
            
            <div className="vi_right">
                <p className="title">contact Detail</p>
                <p className="content">Receive important alerts and inhtmlFormation!</p>

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
