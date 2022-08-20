/*import React from 'react';
import './Button.css';

export default function SignUp() {
  return <h1 classNameName='sign-up'>Sing Up</h1>;
}
// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }*/
import React from 'react'
import '../Assets/styles/signup.css'
import {Link}from'react-router-dom'
export default function Signup() {
  return (
    <div className="wrapper">
    <div className="title">
      Registration Form
    </div>
    <div className="form">
       <div className="inputfield">
          <label>First Name</label>
          <input type="text" className="input"/>
       </div>  
        <div className="inputfield">
          <label>Last Name</label>
          <input type="text" className="input"/>
       </div>  
       <div className="inputfield">
          <label>Password</label>
          <input type="password" className="input"/>
       </div>  
      <div className="inputfield">
          <label>Confirm Password</label>
          <input type="password" className="input"/>
       </div> 
        <div className="inputfield">
          <label>Email Address</label>
          <input type="text" className="input"/>
       </div> 
      <div className="inputfield">
          <label>Phone Number</label>
          <input type="text" className="input"/>
       </div> 
      <div className="inputfield">
          <label>Address</label>
          <textarea className="textarea"></textarea>
       </div> 
    
      <div className="inputfield terms">
          <label className="check">
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div className="inputfield">
        <input type="submit" defaultValue="Register" className="btn"/>
      </div>
      <p> have an account? <Link to="">log in</Link></p>
    </div>
</div>
  )
}
