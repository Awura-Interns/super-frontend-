import React from 'react'
import "../Assets/styles/LoginForm.css"
export default function Login() {
    return (
        <>
            <input type="checkbox" id="dark-mode" class="dark-mode-checkbox visually-hidden" />

            <div class="theme-container grow">
                <label for="dark-mode" class="dark-mode-label">
                    DARK MODE
                </label>



                <div class="contact-con">
                    <div class="contact">
                        <p>Sign in</p>

                        <form action="" class="contact-form" autocomplete="off" method="">
                            <div class="input-group first">
                                <input id="user" required="" type="text" name="text" class="input" />
                                <label class="user-label">Username</label>
                            </div>
                            <div class="input-group">
                                <input type="password" name="password" required class="input" />
                                <label for="password" class="user-label">Password</label>



                            </div>


                            <div class="btnn">
                                <button class="cta" id="btnn">
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

        </>

    )
}
