import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
import "../../../Assets/admin/styles/Supplier.css"
import "../../../Assets/admin/styles/button.css"
import "../../../Assets/admin/styles/actionBtn.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';


const positionSection = {
    marginTop: "8rem",
  }
  const positionTitle = {
    marginLeft: "10rem",
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
    padding:"0rem 1rem 0rem 1rem"
  
  }
  const actionBtn = {
    fontSize: "2rem",
    padding:"0"
  }
const Supplier = () => {
    const [supplier, setSupplier] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const listSupplier = () => {
        axios.request({
            method: 'get',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: 'https://dev.api.superlink.awuraplc.org/staff/supplier/'
        }).then(res => {
            console.log(res.data)
            setSupplier(res.data)
            setLoading(false)
        })
    }
    useEffect(() => {
        listSupplier()
    }, [])
    const handleDelete = (id) => {
        axios.request({
            method: 'delete',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: `https://dev.api.superlink.awuraplc.org/staff/supplier/${id}/`
        }).then(() => {
            listSupplier()
        }).catch(error => {
            alert(error.response.data);
        })
    }
    if (loading) {
        return (
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Spinner animation="border" style={{ color: "white" }} />
            </div>
        )
    }
    return (
        <>
            <body className="Body">
                <section class="supplier_listing_whole" style={positionSection}>
                    <h1 style={positionTitle}>Supplier listing</h1>
                    <div class="supplier_listing">
                        <div className='button'>
                            <NavLink to='/admin-page/supplier/supplierForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')} style={RegBtn}>registration</NavLink>
                        </div>
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
                                {supplier.map((supplier, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td style={tableContent}>{index + 1}</td>
                                            <td style={tableContent}> <img className='image_profile_picture' src={supplier.profile_picture} alt="Mark Zuckerberg" /> </td>
                                            <td style={tableContent}>{supplier.user.first_name} {supplier.user.last_name}</td>
                                            <td style={tableContent}>{supplier.user.email}</td>
                                            <td style={tableContent}>{supplier.user.phone}</td>
                                            <td style={tableContent}>{supplier.birthdate}</td>
                                            <td style={tableContent}><img className='image_profile_picture' src={supplier.identification_card} alt={supplier.user.first_name}
                                            /></td>
                                            <td style={tableContent}>  <div className="action_btn">
                                                <div className='btn' style={actionBox}>
                                                    <button className="edite"><Link to={`/admin-page/supplier/supplierEdit/${supplier.pk}`} style={actionBtn}><i className='bx bx-pencil'></i></Link></button>
                                                </div>
                                                <div className='btn' style={actionBox}>
                                                    <button onClick={() => handleDelete(supplier.pk)} className="delete" title="delete" style={actionBtn}>
                                                        <i className='bx bxs-trash-alt'></i>
                                                    </button>
                                                </div>
                                            </div> </td>      </tr>
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
export default Supplier;