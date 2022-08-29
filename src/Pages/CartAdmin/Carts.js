import "../../Assets/styles/Carts.css"

import axios from "axios";
import { useEffect, useState } from 'react'

import * as ReactBootStrap from 'react-bootstrap'
const Carts = () => {

  const [carts, setCarts] = useState([])
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
          <h1>Cart listing</h1>

          <div class="employee_listing">
            
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>delivery</th>

                </tr>
              </thead>
              <tbody>
                {carts.map((cart) => {
                  return (

                    <tr key={cart.id}>
                      <td>{cart.id}</td>
                      <td>{cart.delivery}</td>

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
