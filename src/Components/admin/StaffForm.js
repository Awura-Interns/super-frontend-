import React from 'react'
import { Link } from 'react-router-dom';
import Codes from "../../Helpers/admin/Codes"
import Form from "react-bootstrap/Form"
const StaffForm = (props) => {
    const handleSubmit = props.handleSubmit;
    const title = props.title;
    const link = props.link;
    const formErrors = props.formErrors;
    return (
        <section>
            <div class="Employewrapper">
                <div class="title">
                    {title} registration
                </div>
                <form class="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                     <Form.Group class="inputfield">
                        <Form.Label>First Name</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors.user ? formErrors.user.first_name : null } required type="text" class="input" name='first_name' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user ? formErrors.user.first_name : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Last Name</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors.user ? formErrors.user.last_name : null } required type="text" class="input" name='last_name' />
                            <Form.Control.Feedback type="invalid">

                            {formErrors.user ? formErrors.user.last_name : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Email</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors.user ? formErrors.user.email : null} required type="email" class="input" name='email' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.email : null}
                            </Form.Control.Feedback>
                        </div>
                         </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Password</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors.user ? formErrors.user.password : null} required type="password" class="input" name='password' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.password : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Confirm password</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors.user ? formErrors.user.confirm_password : null} required type="password" class="input" name='confirm_password' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors.user? formErrors.user.confirm_password : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Phone</Form.Label>
                        <div style={{ width: "100%" }}>
                             <div class="inputfield" style={{ display: "block" }}>
                                <Form.Select class="input" name="code">
                                    {Codes.map((Code) => {
                                        return (
                                            <option key={Code.id} value={Code.code} title={Code.name}>{Code.name}--{Code.code}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Control isInvalid={formErrors.user ? formErrors.user.phone : null} required type="tel" class="input" name='phone' />
                                <Form.Control.Feedback type="invalid">

                                {formErrors.user ? formErrors.user.phone : null}
                                </Form.Control.Feedback>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label for="file">Profile Picture</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors ? formErrors.profile_picture : null} required type="file" id="file" accept="image/*" class="input" name='profile_picture' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors ? formErrors.profile_picture : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Birthdate</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control isInvalid={formErrors ? formErrors.birthdate : null} required type="date" class="input" name='birthdate' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.birthdate : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label for="file">Id Card</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control isInvalid={formErrors ? formErrors.identification_card : null} required type="file" id="file" accept="image/*" class="input" name='identification_card' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.identification_card : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <div class="inputfield">
                        <input required type="submit" class="btn" />
                    </div>
                    <Link to={link} className='btn'>Back {title}</Link>
                </form>
            </div>
        </section>
    )
}
export default StaffForm;