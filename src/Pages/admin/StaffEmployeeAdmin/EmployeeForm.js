
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StaffForm from '../../../Components/admin/StaffForm';
import "../../../Assets/admin/styles/button.css"
import { useState } from 'react';
const Singleemployee = () => {
    const [formErrors,setFormErrors]= useState({})
    const navigate=useNavigate(); 
  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = {
        "user": {
            "first_name": event.target.first_name.value,
            "last_name": event.target.last_name.value,
            "email": event.target.email.value,
            "password": event.target.password.value,
            "confirm_password": event.target.confirm_password.value,
            "phone": event.target.code.value + event.target.phone.value
        },
        "profile_picture": event.target.profile_picture.files[0],
        "birthdate": event.target.birthdate.value,
        "identification_card": event.target.identification_card.files[0]
    }
    axios.request({
        method: 'post',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url:'https://dev.api.superlink.awuraplc.org/staff/employee/',
      data
    }).then(res => {
        console.log(res)
        navigate(-1)
    }).catch(error => {
      if (error.response) {
        setFormErrors(error.response.data);
      }
    })
  }
  return (
    <> 
    <StaffForm  handleSubmit={handleSubmit} title="Employee" link="/admin-page/employeeList" formErrors={formErrors}/>
    </>
  );
};
export default Singleemployee;
