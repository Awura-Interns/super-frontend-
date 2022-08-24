
import axios from 'axios';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import StaffForm from '../../Components/StaffForm';
import "../../Assets/styles/button.css"
const Singleemployee = () => {
    const url  = 'http://localhost:8000/staff/employee/';
  
  
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
    <>
    
   
    <StaffForm handleSubmit={handleSubmit}/>
    </>

  );
};
{/* <Form  */}
// const Form=({handleSubmit}){}
export default Singleemployee;
