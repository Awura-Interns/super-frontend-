import React from 'react'
import '../Assets/styles/signin.css'
import {Link}from'react-router-dom'
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
            <p>don't have an account? <Link to="">register now</Link></p>
        </div>
      
    </div>
  )
}
