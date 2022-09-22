import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import axios from "axios";


const title = {
  
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: "bolder",
  color: "rgb(2, 2, 56)"
}
const regForm={
  fontWeight:"700"
}
const formInput={
  fontSize: "1.5rem"
}
const subBtn={
  fontSize:"2rem",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}
const backBtn={
  fontSize:"2rem",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  backgroundColor: "transparent"

}

const StaffForm = (props) => {
    const [supplier, setSupplier] = useState({})
    const [loading, setLoading] = useState(true)
    const [formErrors, setFormErrors] = useState({})
  const navigate=useNavigate();
    const {id} = useParams();
    useEffect(() => {
      setLoading(true)
      axios.request({
        method: 'get',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: `https://dev.api.superlink.awuraplc.org/staff/supplier/${id}/`
      }).then(res => {
        console.log(res.data)
        setSupplier(res.data)
      })
    }, [])
      const handleSubmit = (event) => {
      event.preventDefault();
      const data = {   
        "profile_picture": event.target.profile_picture.files[0],
        "birthdate": event.target.birthdate.value,
        "identification_card": event.target.identification_card.files[0]
    }
      axios.request({
        method: 'patch',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: `https://dev.api.superlink.awuraplc.org/staff/supplier/${id}/`,
        data
      }).then(res => {
        console.log(res);
        navigate(-1)
      }).catch(error => {
        if (error.response) {
          setFormErrors(error.response.data);
        }
      })
    }
    return (
        <section>
            <div class="Employewrapper">
                <div style={title} class="title">
                supplier registration
                </div>
                <form class="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm} for="file">Profile Picture</Form.Label>
                        <div style={{ width: "100%" }}>
                        <img src={`${supplier ? supplier.profile_picture : null}`} alt={`${supplier ? supplier.first_name : null}`} />
                            <Form.Control style={formInput} isInvalid={formErrors ? formErrors.profile_picture : null} defaultValue={supplier ? supplier.profile_picture : null} required type="file" id="file" accept="image/*" class="input" name='profile_picture' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors ? formErrors.profile_picture : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Birthdate</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control style={formInput} isInvalid={formErrors ? formErrors.birthdate : null} defaultValue={supplier ? supplier.birthdate : null} required type="date" class="input" name='birthdate' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.birthdate : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm} for="file">Id Card</Form.Label>
                        <div style={{ width: "100%" }}>
                        <img src={`${supplier ? supplier.identification_card : null}`} alt={`${supplier ? supplier.first_name : null}`} />
                        <Form.Control style={formInput} isInvalid={formErrors ? formErrors.identification_card : null} required type="file" id="file" accept="image/*" class="input" name='identification_card' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.identification_card : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <div className="inputfield">
                        <button className="btn" style={subBtn}> update </button>
                    </div>
                    <Link to="/admin-page/supplier" className='btn' style={backBtn}>Back to supplier</Link>
                </form>
            </div>
        </section>
    )
}
export default StaffForm;