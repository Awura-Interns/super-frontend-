
import { Link, useParams } from 'react-router-dom';

import "../../Assets/styles/button.css"
const Singleemployee = () => {
  
  // const {EmployeeId} = useParams();
  // console.log(EmployeeId)
  // const employee = employees.find((employee)=> employee.id === EmployeeId);
  // const { birthdate} = employee
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
                        <form class="form">
                            <div class="inputfield">
                                <label>First Name</label>
                                <input type="text" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Last Name</label>
                                <input type="text" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Email</label>
                                <input type="email" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Password</label>
                                <input type="password" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Confirm password</label>
                                <input type="password" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Phone</label>
                                <input type="tel" class="input" />
                            </div>

                            <div class="inputfield">
                                <label for="file">Profile Picture</label>
                                <input type="file" id="file" accept="image/*" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Birthdate</label>
                                <input type="date" class="input" />
                            </div>
                            <div class="inputfield">
                                <label for="file">Id Card</label>
                                <input type="file" id="file" accept="image/*" class="input" />
                            </div>
                            <div class="inputfield">
                                <input type="submit" class="btn" />
                            </div>
                            <Link to='/EmployeeList' className='btn'>Back EmployeeList</Link> 
                        </form>
                    </div>
                </section>

  );
};

export default Singleemployee;
