
import "../../Assets/styles/global.css"
import "../../Assets/styles/SideNavBar.css"
import "../../Assets/styles/ListForm.css"
import "../../Assets/styles/delivery.css"
import * as ReactBootStrap from 'react-bootstrap'
import "../../Assets/styles/ListForm.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
const Delivery = () => {
    const [delivery, setDelivery] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // fetch data from the localhost and save it to the state
    useEffect(() => {
        setLoading(true)
        axios.get('http://127.0.0.1:8000/staff/delivery/')
            .then(res => {
                console.log(res.data)
                setDelivery(res.data)
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
                <section className="delivery_listing_whole">
                    <h1>delivery listing</h1>


                    <div class="delivery_listing">
                    <div className='button'>
                    <NavLink to='/Delivery/DeliveryForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>
                   
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

                                </tr>
                            </thead>
                            <tbody>
                                {delivery.map((delivery) => {
                                    return (

                                        <tr key={delivery.id}>
                                            <td>{delivery.id}</td>
                                            <td> <img src={delivery.profile_picture} alt="Mark Zuckerberg"
                                                 className="image_profile_picture"/> </td>
                                            <td>{delivery.user.first_name} {delivery.user.last_name}</td>
                                            <td>{delivery.user.email}</td>
                                            <td>{delivery.user.phone}</td>
                                            <td>{delivery.birthdate}</td>
                                            <td><img src={delivery.identification_card} alt="Mark Zuckerberg"
                                                className="image_profile_picture" /></td>

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
export default Delivery;