import { NavLink, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
import axios from "axios";
import { useEffect, useState } from 'react'
import "../../../Assets/admin/styles/global.css"
import "../../../Assets/admin/styles/SideNavBar.css"
import "../../../Assets/admin/styles/ProducerList.css"
import "../../../Assets/admin/styles/actionBtn.css"

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
  padding:"0rem 1rem 0rem 1rem",
  backgroundColor: "transparent"

}
const actionBtn = {
  fontSize: "2rem",
  padding:"0"
}

const Producer = () => {
  const [producer, setProducer] = useState([])
  const [loading, setLoading] = useState(true)
  const listProduct = () => {
    axios.request({
      method: 'get',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: 'https://dev.api.superlink.awuraplc.org/products/'
    }).then(res => {
      console.log(res.data)
      setProducer(res.data)
      setLoading(false)
    }).catch(error => {
    });
  }
  useEffect(() => {
    setLoading(true)
    listProduct();
  }, [])
  const handleDelete = (id) => {
    axios.request({
      method: 'delete',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: `https://dev.api.superlink.awuraplc.org/products/${id}/`
    }).then(() => {
      listProduct()
    }).catch(error => {
      alert(error.response.data);
    })
  }
  return (
    <>
      <body className="Body">
        <section class="producer_listing_whole" style={positionSection}>
          <h1 style={positionTitle}>Product listing</h1>
          <div class="producer_listing">
            <div className='button'>
              <NavLink to='/admin-page/product/productForm' className={({ isActive }) => (isActive ? 'button-12' : 'button-12')} style={RegBtn}>registration</NavLink>
            </div>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th style={tableHeading}>No.</th>
                  <th style={tableHeading}>image</th>
                  <th style={tableHeading}>doc</th>
                  <th style={tableHeading}>product_name</th>
                  <th style={tableHeading}>product_type</th>
                  <th style={tableHeading}>amount</th>
                  <th style={tableHeading}>price</th>
                  <th style={tableHeading}>discount</th>
                  <th style={tableHeading}>producer</th>
                  <th style={tableHeading}>posted_by</th>
                  <th style={tableHeading}>Action</th>
                </tr>
              </thead>
              <tbody>
                {producer.map((producers, index) => {
                  return (
                    <tr key={index + 1}>
                      <td style={tableContent}>{index + 1}</td>
                      <td style={tableContent}> <img className='image_profile_picture' src={producers.image} alt={producers.product_name} /> </td>
                      <td style={tableContent}> <img className='image_profile_picture' src={producers.doc} alt={producers.product_name} /> </td>
                      <td style={tableContent}>{producers.product_name} </td>
                      <td style={tableContent}>{producers.product_type}</td>
                      <td style={tableContent}>{producers.amount}</td>
                      <td style={tableContent}>{producers.price}</td>
                      <td style={tableContent}>{producers.discount}</td>
                      <td style={tableContent}>{producers.producer}</td>
                      <td style={tableContent}>{producers.posted_by}</td>
                      <td style={tableContent}>
                        <div className="action_btn">
                          <div style={actionBox} className='btn'>
                            <button title="edite" className="edite"><Link to={`/admin-page/product/productEdit/${producers.id}`} ><i className='bx bx-pencil' style={actionBtn}></i></Link></button>
                          </div>
                          <div style={actionBox} className='btn'>
                            <button  onClick={() => handleDelete(producers.id)} className="delete" title="delete">
                              <i className='bx bxs-trash-alt' style={actionBtn}></i>
                            </button>
                          </div>
                        </div>
                      </td>
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