import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
import "../../../Assets/admin/styles/Supplier.css"
import "../../../Assets/admin/styles/button.css"
import "../../../Assets/admin/styles/actionBtn.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
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
                <section class="supplier_listing_whole">
                    <h1>Supplier listing</h1>
                    <div class="supplier_listing">
                        <div className='button'>
                            <NavLink to='/admin-page/supplier/supplierForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>
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
                                {supplier.map((supplier, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td> <img className='image_profile_picture' src={supplier.profile_picture} alt="Mark Zuckerberg" /> </td>
                                            <td>{supplier.user.first_name} {supplier.user.last_name}</td>
                                            <td>{supplier.user.email}</td>
                                            <td>{supplier.user.phone}</td>
                                            <td>{supplier.birthdate}</td>
                                            <td><img className='image_profile_picture' src={supplier.identification_card} alt={supplier.user.first_name}
                                            /></td>
                                            <td>  <div className="action_btn">
                                                <div className='btn'>
                                                    <button className="edite"><Link to={`/admin-page/supplier/supplierEdit/${supplier.pk}`} ><i className='bx bx-pencil'></i></Link></button>
                                                </div>
                                                <div className='btn'>
                                                    <button onClick={() => handleDelete(supplier.pk)} className="delete" title="delete">
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