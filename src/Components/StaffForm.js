import React from 'react'
import { Link } from 'react-router-dom';
const StaffForm = ({handleSubmit}) => {
    
  return (
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
  )
}
 export default StaffForm;