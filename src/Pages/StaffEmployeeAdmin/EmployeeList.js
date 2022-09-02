// import { Link } from 'react-router-dom';
import "../../Assets/styles/employee.css"
import "../../Assets/styles/actionBtn.css"
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap'
// import employees from "../Helpers/EmployeeData"
import { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const listEmployees =()=>{
        axios.request({
            method: 'get',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: 'https://dev.api.superlink.awuraplc.org/staff/employee/'
        }).then(res => {
            console.log(res.data)
            
            setEmployees(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
       
        listEmployees()

    }, [])



    const handleDelete = (id) => {
        axios.request({
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: `https://dev.api.superlink.awuraplc.org/staff/employee/${id}/`

        }).then(()=>{
            listEmployees()
        }).catch(error=>{
            alert(error.response.data);
        })
    }

    if(loading){
        return (
        <div style={{width:"100vw", height:"100vh", backgroundColor:"rgba(0,0,0,0.6)", display:"flex", alignItems:"center", justifyContent:"center"}}>
              
            <Spinner animation="border" style={{color:"white"}} />
        </div>
        )
    }
    

    return (
        <>
            <body className="Body">

                <section class="employee_listing_whole">
                    <h1>Employee listing</h1>

                    <div class="employee_listing">
                        <div className='button'>
                            <NavLink to='/EmployeeList/EmployeeForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>

                        </div>

                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>photo</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>phone number</th>
                                    <th>birthdate</th>
                                    <th>identification card</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee,index) => {
                                    return (

                                        <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                            <td> <img className="image_profile_picture" src={employee.profile_picture} alt="Mark Zuckerberg"
                                            /> </td>
                                            <td>{employee.user.first_name} {employee.user.last_name}</td>
                                            <td>{employee.user.email}</td>
                                            <td>{employee.user.phone}</td>
                                            <td>{employee.birthdate}</td>
                                            <td><img src={employee.identification_card} alt={employee.user.first_name}
                                                className="image_profile_picture" /></td>
                                            <td>
                                                <div className="action_btn">
                                                    <div className='btn'>
                                                    <button className="edite"><Link  to={`/employeeList/employeeEdit/${employee.pk}`} ><i className='bx bx-pencil'></i></Link></button>  

                                                    </div>
                                                    <div className='btn'>

                                                        <button onClick={() => handleDelete(employee.pk)} className="delete" title="delete">
                                                            <i className='bx bxs-trash-alt'></i>
                                                        </button>
                                                    </div>
                                                </div>  </td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </ReactBootStrap.Table>
                    </div>

                   

                </section>

            </body>
        </>
    )
}
export default EmployeeList;