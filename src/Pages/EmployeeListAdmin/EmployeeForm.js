
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import "../../Assets/styles/button.css"
const Singleemployee = () => {
    const url  = 'http://localhost:8000/staff/employee/';
  
  // const {EmployeeId} = useParams();
  // console.log(EmployeeId)
  // const employee = employees.find((employee)=> employee.id === EmployeeId);
  // const { birthdate} = employee
  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = {
        "user": {
            "first_name": event.target.first_name.value,
            "last_name": event.target.last_name.value,
            "email": event.target.email.value,
            "password": event.target.password.value,
            "confirm_password": event.target.confirm_password.value,
            "phone": event.target.phone.value
        },
        "profile_picture": event.target.profile_picture.files[0],
        "birthdate": event.target.birthdate.value,
        "identification_card": event.target.identification_card.files[0]
    }
    axios.request({
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        url,
        data
    }).then(res => {
        console.log(res)
    })
  }
  return (
    // <section className='section employee'>
     
      
    //   <h2> {birthdate}</h2>
    //   <Link to='/EmployeeList' className='btn'>Back employees</Link>
    // </section>
    // <h1>its there
      
    // </h1>
    <section>

                    <div class="Employewrapper">
                        <div class="title">
                            employee registration
                        </div>
                        <form class="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div class="inputfield">
                                <label>First Name</label>
                                <input required type="text" class="input" name='first_name'/>
                            </div>
                            <div class="inputfield">
                                <label>Last Name</label>
                                <input required type="text" class="input" name='last_name'/>
                            </div>
                            <div class="inputfield">
                                <label>Email</label>
                                <input required type="email" class="input" name='email'/>
                            </div>
                            <div class="inputfield">
                                <label>Password</label>
                                <input required type="password" class="input" name='password'/>
                            </div>
                            <div class="inputfield">
                                <label>Confirm password</label>
                                <input required type="password" class="input" name='confirm_password'/>
                            </div>
                            <div class="inputfield">
                                <label>Phone</label>
                                <input required type="tel" class="input" name='phone'/>
                            </div>

                            <div class="inputfield">
                                <label for="file">Profile Picture</label>
                                <input required type="file" id="file" accept="image/*" class="input" name='profile_picture'/>
                            </div>
                            <div class="inputfield">
                                <label>Birthdate</label>
                                <input required type="date" class="input" name='birthdate'/>
                            </div>
                            <div class="inputfield">
                                <label for="file">Id Card</label>
                                <input required type="file" id="file" accept="image/*" class="input" name='identification_card'/>
                            </div>
                            <div class="inputfield">
                                <input required type="submit" class="btn" />
                            </div>
                            <Link to='/EmployeeList' className='btn'>Back EmployeeList</Link> 
                        </form>
                    </div>
                </section>

  );
};

export default Singleemployee;
