import "../../../Assets/admin/styles/employee.css"
import "../../../Assets/admin/styles/actionBtn.css"
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const positionSection = {
    marginTop: "8rem",
  }
  const positionTitle = {
    marginLeft: "15rem",
    fontSize: "3rem",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: "bolder",
    color: "rgb(2, 2, 56)"
  }
  const RegBtn = {
    fontSize: "2rem"
  }
  const tableHeading = {
    fontSize: "1.5rem"
  }
  const tableContent = {
    fontSize: "1.5rem",
    fontWeight: "600",
  }
  const actionBox = {
    fontSize: "1rem",
    padding:"0rem 1rem 0rem 1rem",
    backgroundColor: "transparent"
  
  }
  const actionBtn = {
    fontSize: "2rem",
    padding:"0"
  }
  const tableSize={
    width: "140vh",
    height: "60vh"
  }
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
        
            <body className="Body">
                <section class="employee_listing_whole" style={positionSection}>
                    <h1 style={positionTitle}>Employee listing<NavLink to='/admin-page/employeeList/employeeForm' className={({ isActive }) => (isActive ? 'addEmployee' : 'addEmployee')} ><i class='bx bxs-add-to-queue' title="add"></i> </NavLink> </h1>

                    <div class="employee_listing" style={tableSize}>
                       
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={tableHeading}>No.</th>
                                    <th style={tableHeading}>photo</th>
                                    <th style={tableHeading}>name</th>
                                    <th style={tableHeading}>email</th>
                                    <th style={tableHeading}>phone number</th>
                                    <th style={tableHeading}>birthdate</th>
                                    <th style={tableHeading}>identification card</th>
                                    <th style={tableHeading}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee,index) => {
                                    return (
                                        <tr key={index + 1}>
                                        <td style={tableContent}>{index + 1}</td>
                                            <td style={tableContent}> <img className="image_profile_picture" src={employee.profile_picture} alt="Mark Zuckerberg"
                                            /> </td>
                                            <td style={tableContent}>{employee.user.first_name} {employee.user.last_name}</td>
                                            <td style={tableContent}>{employee.user.email}</td>
                                            <td style={tableContent}>{employee.user.phone}</td>
                                            <td style={tableContent}>{employee.birthdate}</td>
                                            <td style={tableContent}><img src={employee.identification_card} alt={employee.user.first_name}
                                                className="image_profile_picture" /></td>
                                            <td style={tableContent}>
                                                <div className="action_btn">
                                                    <div className='btn' style={actionBox}>
                                                    <button className="edite"><Link  to={`/admin-page/employeeList/employeeEdit/${employee.pk}`} style={actionBtn}><i className='bx bx-pencil'></i></Link></button>  
                                                    </div>
                                                    <div className='btn' style={actionBox}>
                                                        <button onClick={() => handleDelete(employee.pk)} className="delete" title="delete" style={actionBtn}>
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
        
    )
}
export default EmployeeList;