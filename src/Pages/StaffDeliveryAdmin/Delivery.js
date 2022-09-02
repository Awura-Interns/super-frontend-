import "../../Assets/styles/global.css"
import "../../Assets/styles/SideNavBar.css"
import "../../Assets/styles/ListForm.css"
import "../../Assets/styles/delivery.css"
import * as ReactBootStrap from 'react-bootstrap'
import "../../Assets/styles/ListForm.css"
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

import { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import "../../Assets/styles/actionBtn.css"
const Delivery = () => {
    const [delivery, setDelivery] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)



    const listDelivery =()=>{
        axios.request({
            method: 'get',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: 'https://dev.api.superlink.awuraplc.org/staff/delivery/'
        }).then(res => {
            console.log(res.data)
            setDelivery(res.data)
            setLoading(false)
        })
    }
    // fetch data from the localhost and save it to the state
    useEffect(() => {
        
        listDelivery()

    }, [])

    const handleDelete = (id) => {
        axios.request({
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url: `https://dev.api.superlink.awuraplc.org/staff/delivery/${id}/`

        }).then(()=>{
            listDelivery()
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
                <section className="delivery_listing_whole">
                    <h1>delivery listing</h1>


                    <div class="delivery_listing">
                        <div className='button'>
                            <NavLink to='/delivery/deliveryForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>

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
                                {delivery.map((delivery, index) => {
                                    return (

                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td> <img src={delivery.profile_picture} alt="Mark Zuckerberg"
                                                className="image_profile_picture" /> </td>
                                            <td>{delivery.user.first_name} {delivery.user.last_name}</td>
                                            <td>{delivery.user.email}</td>
                                            <td>{delivery.user.phone}</td>
                                            <td>{delivery.birthdate}</td>
                                            <td><img src={delivery.identification_card} alt="Mark Zuckerberg"
                                                className="image_profile_picture" /></td>
                                            <td>
                                                <div className="action_btn">
                                                    <div className='btn'>
                                                    <button className="edite"><Link  to={`/delivery/deliveryEdit/${delivery.pk}`} ><i className='bx bx-pencil'></i></Link></button>  

                                                    </div>
                                                    <div className='btn'>

                                                        <button onClick={() => handleDelete(delivery.pk)} className="delete" title="delete">
                                                            <i className='bx bxs-trash-alt'></i>
                                                        </button>
                                                    </div>
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
export default Delivery;