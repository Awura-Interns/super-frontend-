import React from 'react'
import '../Assets/styles/signin.css'
import {Link}from'react-router-dom'
export default function Signin() {
  return (
    <div className="wrapper">
        <div className="title">
            Registration Form
        </div>
        <div className="form">

            <div className="inputfield">
                <label>Email Address</label>
                <input type="text" className="input"/>
            </div>
            <div className="inputfield">
                <label>Password</label>
                <input type="password" className="input"/>
            </div>
            <div className="inputfield">
                <input type="submit" defaultValue="Register" className="btn"/>
            </div>
            <p>don't have an account? <Link to="">register now</Link></p>
        </div>
      
    </div>
  )
}
