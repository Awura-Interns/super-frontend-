import React from 'react'
import { Link } from 'react-router-dom';
import Codes from "../../Helpers/admin/Codes"
import Form from "react-bootstrap/Form"



const heading = {
  
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
    const handleSubmit = props.handleSubmit;
    const title = props.title;
    const link = props.link;
    const formErrors = props.formErrors;
    return (
        <section>
            <div class="Employewrapper">
                <div style={heading} class="title">
                    {title} registration
                </div>
                <form class="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                     <Form.Group class="inputfield">
                        <Form.Label style={regForm}>First Name</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.first_name : null } required type="text" class="input" name='first_name' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user ? formErrors.user.first_name : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Last Name</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.last_name : null } required type="text" class="input" name='last_name' />
                            <Form.Control.Feedback type="invalid">

                            {formErrors.user ? formErrors.user.last_name : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Email</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.email : null} required type="email" class="input" name='email' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.email : null}
                            </Form.Control.Feedback>
                        </div>
                         </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Password</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.password : null} required type="password" class="input" name='password' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.password : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Confirm password</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.confirm_password : null} required type="password" class="input" name='confirm_password' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.confirm_password : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Phone</Form.Label>
                        <div style={{ width: "100%" }}>
                             <div class="inputfield" style={{ display: "block" }}>
                                <Form.Select class="input" name="code">
                                    {Codes.map((Code) => {
                                        return (
                                            <option key={Code.id} value={Code.code} title={Code.name}>{Code.name}--{Code.code}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Control style={formInput} isInvalid={formErrors.user ? formErrors.user.phone : null} required type="tel" class="input" name='phone' />
                                <Form.Control.Feedback type="invalid">

                                {formErrors.user ? formErrors.user.phone : null}
                                </Form.Control.Feedback>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm} for="file">Profile Picture</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control style={formInput} isInvalid={formErrors ? formErrors.profile_picture : null} required type="file" id="file" accept="image/*" class="input" name='profile_picture' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors ? formErrors.profile_picture : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm}>Birthdate</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control style={formInput} isInvalid={formErrors ? formErrors.birthdate : null} required type="date" class="input" name='birthdate' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.birthdate : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label style={regForm} for="file">Id Card</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control style={formInput} isInvalid={formErrors ? formErrors.identification_card : null} required type="file" id="file" accept="image/*" class="input" name='identification_card' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.identification_card : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <div class="inputfield">
                        <input required type="submit" class="btn" style={subBtn} />
                    </div>
                    <Link to={link} className='btn' style={backBtn}>Back {title}</Link>
                </form>
            </div>
        </section>
    )
}
export default StaffForm;