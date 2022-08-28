import { NavLink } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
import axios from "axios";
import { useEffect, useState } from 'react'
import "../../Assets/styles/global.css"
import "../../Assets/styles/SideNavBar.css"
import "../../Assets/styles/ProducerList.css"

const Producer = () => {
  const [producer, setProducer] = useState([])
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
        url:'https://dev.api.superlink.awuraplc.org/products/'
    }).then(res => {
        console.log(res.data)
        setProducer(res.data)
        setLoading(false)
    })
    
}, [])


const handleDelete = (id)=>{
axios.request({
  method:'delete',
  headers: {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
},
url:`https://dev.api.superlink.awuraplc.org/products/${id}/`

})
}

  return (
    <>
      <body className="Body">

        <section class="producer_listing_whole">
          <h1>producer listing</h1>

          <div class="producer_listing">
            <div className='button'>
              <NavLink to='/Producer/ProducerForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')}>registration</NavLink>

            </div>

            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>image</th>
                  <th>doc</th>
                  <th>product_name</th>

                  <th>product_type</th>
                  <th>description</th>
                  <th>amount</th>
                  <th>price</th>

                  <th>discount</th>
                  <th>producer</th>
                  <th>posted_by</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {producer.map((producers,index) => {
                  return (

                    <tr key={index+1}>
                      <td>{index+1}</td>
                      <td> <img className='image_profile_picture' src={producers.image} alt="Mark Zuckerberg" /> </td>
                      <td> <img className='image_profile_picture' src={producers.doc} alt="Mark Zuckerberg" /> </td>
                      <td>{producers.product_name} </td>
                      <td>{producers.product_type}</td>
                      <td>{producers.description}</td>
                      <td>{producers.amount}</td>
                      <td>{producers.price}</td>
                      <td>{producers.discount}</td>
                      <td>{producers.producer}</td>
                      <td>{producers.posted_by}</td>
                      <td><div className="action_btn">
                        <button  className="edite" title="edite"><i className='bx bx-pencil'></i></button>
                        <button onClick={()=>handleDelete(producers.id)} className="delete" title="delete">
                        
                        <i className='bx bxs-trash-alt'></i>
                        </button>
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

export default Producer;