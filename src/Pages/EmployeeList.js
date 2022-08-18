// import { Link } from 'react-router-dom';
import "../Assets/styles/employee.css"

import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap'
// import employees from "../Helpers/EmployeeData"
import { useEffect, useState } from 'react'
const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // fetch data from the localhost and save it to the state
    useEffect(() => {
        setLoading(true)
        axios.get('http://127.0.0.1:8000/staff/employee/')
            .then(res => {
                console.log(res.data)
                setEmployees(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }, [])
    return (
        <>
            <body className="Body">

                <section class="employee_listing_whole">
                    <h1>Employee listing</h1>


                    <div class="employee_listing">

                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>photo</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>phone number</th>
                                    <th>birthdate</th>
                                    <th>identification card</th>

                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => {
                                    return (

                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td> <img src={employee.profile_picture} alt="Mark Zuckerberg"
                                                class="picture" /> </td>
                                            <td>{employee.user.first_name} {employee.user.last_name}</td>
                                            <td>{employee.user.email}</td>
                                            <td>{employee.user.phone}</td>
                                            <td>{employee.birthdate}</td>
                                            <td><img src={employee.identification_card} alt={employee.user.first_name}
                                                class="picture" /></td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </ReactBootStrap.Table>
                    </div>

                    {/* <Link to={`/EmployeeList/${employee.id}`}>more</Link> */}

                </section>
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
                        </form>
                    </div>
                </section>
            </body>
        </>
    )
}
export default EmployeeList;