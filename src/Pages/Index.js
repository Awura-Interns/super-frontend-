import { useState, useContext } from "react";
// import Modal from "../Components/Modal";
// import "../Assets/styles/global.css"
// import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/IndexPage.css"
// import Login from "../Components/Login"
import AuthContext from "../Auth/AuthContect"
import "../Assets/styles/LoginForm.css"
const Index = () => {
  
  let {loginUser} =useContext(AuthContext)
  return (

    <body>
     
      <h1></h1>
      <div className="form">
     

<div class="theme-container grow">
    <div class="contact-con">
        <div class="contact">
            
            <div>
             <h1>hello</h1>   
            </div>
            
        </div>
    </div>
</div>
      </div>

    </body>

  );
};
export default Index;