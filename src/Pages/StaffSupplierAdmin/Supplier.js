import React from 'react'
import { NavLink } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
import "../../Assets/styles/Supplier.css"
import "../../Assets/styles/button.css"
import "../../Assets/styles/actionBtn.css"
import axios from "axios";
import { useEffect, useState } from 'react'
const Supplier = () => {
    const [supplier, setSupplier] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // fetch data from the localhost and save it to the state
    useEffect(() => {
        setLoading(true)
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
    
        })
      }, [])

    return (
        <>
            <body className="Body">

                <section class="supplier_listing_whole">
                    <h1>Supplier listing</h1>

                    <div class="supplier_listing">
                        <div className='button'>
                            <NavLink to='/Supplier/SupplierForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>

                        </div>

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
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {supplier.map((supplier) => {
                                    return (

                                        <tr key={supplier.id}>
                                            <td>{supplier.id}</td>
                                            <td> <img className='image_profile_picture' src={supplier.profile_picture} alt="Mark Zuckerberg" /> </td>
                                            <td>{supplier.user.first_name} {supplier.user.last_name}</td>
                                            <td>{supplier.user.email}</td>
                                            <td>{supplier.user.phone}</td>
                                            <td>{supplier.birthdate}</td>
                                            <td><img className='image_profile_picture' src={supplier.identification_card} alt={supplier.user.first_name}
                                            /></td>
                                            <td><div className="action_btn">
                                                <button className="edite" title="edite"><i className='bx bxs-trash-alt'></i></button>
                                                <button className="delete" title="delete"><i className='bx bx-pencil'></i></button>
                                            </div> </td>

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
export default Supplier;