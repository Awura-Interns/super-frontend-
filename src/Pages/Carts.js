import "../Assets/styles/Carts.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
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
        <section class="employee_listing_whole">
          <div class="employee_listing">
          <h1>    Cart listing</h1>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>delivery</th>
                  <th>delivery man</th>
                  <th>closed</th>
                  <th>payed</th>
                  <th>items amount</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart,index) => {
                  return (
                    <tr key={index+1}>
                      <td>{index+1}</td>
                      <td>{cart.delivery ? "its delivered" : "it not delivered " }</td>
                      <td>{cart.delivery_man ? cart.delivery_man : "there is no delivery man " }</td>
                      <td>{cart.closed ? "cart is closed" : "cart is not closed" }</td>
                      <td>{cart.payed ? "its payed" : "it not payed " }</td>
                      <td>{cart.items.length}</td>
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
