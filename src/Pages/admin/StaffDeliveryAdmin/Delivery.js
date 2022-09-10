import * as ReactBootStrap from 'react-bootstrap'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import "../../../Assets/admin/styles/global.css"
import "../../../Assets/admin/styles/SideNavBar.css"
import "../../../Assets/admin/styles/ListForm.css"
import "../../../Assets/admin/styles/delivery.css"
import "../../../Assets/admin/styles/actionBtn.css"
import "../../../Assets/admin/styles/ListForm.css"


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
                <section className="delivery_listing_whole" style={positionSection}>
                    <h1 style={positionTitle}>delivery listing</h1>
                    <div class="delivery_listing">
                        <div className='button'>
                            <NavLink to='/admin-page/delivery/deliveryForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')} style={RegBtn}>registration</NavLink>
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
                                {delivery.map((delivery, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td style={tableContent}>{index + 1}</td>
                                            <td style={tableContent}> <img src={delivery.profile_picture} alt="Mark Zuckerberg"
                                                className="image_profile_picture" /> </td>
                                            <td style={tableContent}>{delivery.user.first_name} {delivery.user.last_name}</td>
                                            <td style={tableContent}>{delivery.user.email}</td>
                                            <td style={tableContent}>{delivery.user.phone}</td>
                                            <td style={tableContent}>{delivery.birthdate}</td>
                                            <td style={tableContent}><img src={delivery.identification_card} alt="Mark Zuckerberg"
                                                className="image_profile_picture" /></td>
                                            <td style={tableContent}>
                                                <div className="action_btn">
                                                    <div className='btn' style={actionBox}>
                                                    <button className="edite"><Link  to={`/admin-page/delivery/deliveryEdit/${delivery.pk}`} style={actionBtn} ><i className='bx bx-pencil'></i></Link></button>  
                                                    </div>
                                                    <div className='btn' style={actionBox}>
                                                        <button onClick={() => handleDelete(delivery.pk)} className="delete" title="delete" style={actionBtn}>
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