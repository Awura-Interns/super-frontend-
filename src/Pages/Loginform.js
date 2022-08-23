import { useState, useContext } from "react";
// import Modal from "../Components/Modal";
// import "../Assets/styles/global.css"
// import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/IndexPage.css"
// import Login from "../Components/Login"
import AuthContext from "../Auth/AuthContect"
import "../Assets/styles/LoginForm.css"
const Loginform = () => {
  
  let {loginUser} =useContext(AuthContext)
  return (

    <body>
     
      <h1></h1>
      <div className="form">
     

<div class="theme-container grow">
    <div class="contact-con">
        <div class="contact">
            <p>Log in </p>

            <form onSubmit={loginUser} class="contact-form">
            
                <div class="input-group first">
                    <input id="email" required="" type="email" name="email" class="input" />
                    <label class="user-label">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" name="password" required class="input" />
                    <label for="password" class="user-label">Password</label>



                </div>


                <div class="btnn">
                    <button class="cta" type="submit" id="btnn">
                        <span class="hover-underline-animation"> Login </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10"
                            viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10"
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                transform="translate(30)"></path>
                        </svg>
                    </button>
                    

                </div>
            </form>
        </div>
    </div>
</div>
      </div>

    </body>

  );
};
export default Loginform;