import React from 'react'

import * as ReactBootStrap from 'react-bootstrap'
import "../Assets/styles/Supplier.css"
import suppliers from "../Helpers/SupplierData"
const Supplier = () => {
    return (
        <>
            <body className="Body">

                <section class="supplier_listing_whole">
                    <h1>delivery listing</h1>


                    <div class="supplier_listing">

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
                                {suppliers.map((supplier) => {
                                    return (

                                        <tr key={supplier.id}>
                                            <td>{supplier.id}</td>
                                            <td> <img src={supplier.profile_picture} alt="Mark Zuckerberg"
                                                class="picture" /> </td>
                                            <td>{supplier.user.first_name} {supplier.user.last_name}</td>
                                            <td>{supplier.user.email}</td>
                                            
                                            <td>{supplier.user.phone}</td>
                                            <td>{supplier.birthdate}</td>
                                            <td><img src={supplier.identification_card} alt="Mark Zuckerberg"
                                                class="picture" /></td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </ReactBootStrap.Table>
                    </div>
                </section>
                <section>

                    <div class="Employewrapper">
                        <div class="title">
                            Supplier registration
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
export default Supplier;