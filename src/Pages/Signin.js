import React from 'react'
import '../Assets/styles/signin.css'

export default function Signin() {
  return (
    <div class="wrapper">
        <div class="title">
            Registration Form
        </div>
        <div class="form">

            <div class="inputfield">
                <label>Email Address</label>
                <input type="text" class="input"/>
            </div>
            <div class="inputfield">
                <label>Password</label>
                <input type="password" class="input"/>
            </div>
            <div class="inputfield">
                <input type="submit" value="Register" class="btn"/>
            </div>
            <p>don't have an account? <a href="">register now</a></p>
        </div>
      
    </div>
  )
}
