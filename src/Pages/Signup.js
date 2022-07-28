/*import React from 'react';
import './Button.css';

export default function SignUp() {
  return <h1 className='sign-up'>Sing Up</h1>;
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
import './signup.css'

export default function Signup() {
  return (
    <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea"></textarea>
       </div> 
    
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Register" class="btn"/>
      </div>
      <p> have an account? <a href="">log in</a></p>
    </div>
</div>
  )
}
