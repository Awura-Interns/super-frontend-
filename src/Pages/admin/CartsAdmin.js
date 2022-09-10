import "../../Assets/admin/styles/Carts.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
const positionSection = {
  marginTop: "8rem",
}
const positionTitle = {
  marginLeft: ".5rem",
  fontSize: "3rem",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: "bolder",
  color: "rgb(2, 2, 56)"
}

const tableHeading = {
  fontSize: "1.5rem"
}
const tableContent = {
  fontSize: "1.5rem",
  fontWeight: "600",
}
const Carts = () => {
  const [carts, setCarts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.request({
      method: 'get',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: 'https://dev.api.superlink.awuraplc.org/staff/cart/'
    }).then(res => {
      console.log(res.data)
      setCarts(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <>
      <body className="Body">
        <section class="employee_listing_whole" style={positionSection}>
          <div class="employee_listing">
          <h1 style={positionTitle}>Cart listing</h1>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th style={tableHeading}>No.</th>
                  <th style={tableHeading}>delivery</th>
                  <th style={tableHeading}>delivery man</th>
                  <th style={tableHeading}>closed</th>
                  <th style={tableHeading}>payed</th>
                  <th style={tableHeading}>items amount</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart,index) => {
                  return (
                    <tr key={index+1}>
                      <td style={tableContent}>{index+1}</td>
                      <td style={tableContent}>{cart.delivery ? "its delivered" : "it not delivered " }</td>
                      <td style={tableContent}>{cart.delivery_man ? cart.delivery_man : "there is no delivery man " }</td>
                      <td style={tableContent}>{cart.closed ? "cart is closed" : "cart is not closed" }</td>
                      <td style={tableContent}>{cart.payed ? "its payed" : "it not payed " }</td>
                      <td style={tableContent}>{cart.items.length}</td>
                    </tr>
                  )
                })}
              </tbody>
            </ReactBootStrap.Table>
          </div>
        </section>
      </body>
    </>
  );
};
export default Carts;
