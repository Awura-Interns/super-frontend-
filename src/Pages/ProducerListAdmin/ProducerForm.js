import React from 'react'
import { Link } from 'react-router-dom';
import "../../Assets/styles/ProducerList.css"
import axios from "axios";
import { useEffect, useState } from 'react'
const ProducerForm = () => {
  const [supplier, setSupplier] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // fetch data from the localhost and save it to the state
  useEffect(() => {
    setLoading(true)
    axios.get('http://127.0.0.1:8000/staff/supplier/')
      .then(res => {
        console.log(res.data)
        setSupplier(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }, [])
  return (
    <section>


      <div className="Employewrapper">
        <div className="title">
          Producer registration
        </div>
        <form className="form">
          <div className="inputfield">
            <label for="file">Product Picture</label>
            <input type="file" id="file" accept="image/*" className="input" />
          </div>
          <div className="inputfield">
            <label for="file">agreement Picture</label>
            <input type="file" id="file" accept="image/*" className="input" />
          </div>
          <div className="inputfield">
            <label>product_name </label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>product type</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>description</label>
            <input type="textarea" className="input" maxLength="100" placeholder='100 characters' />
          </div>
          <div className="inputfield">
            <label>Amount</label>
            <input type="number" className="input" placeholder='IN kilogram' />
          </div>
          <div className="inputfield">
            <label>price</label>
            <input type="number" className="input" />
          </div>


          <div className="inputfield">
            <label>Discount</label>
            <input type="number" className="input" maxLength="1" placeholder='in percentage' />
          </div>
          <div className="inputfield">
            <label for="file">Producer</label>


            <select className="input">
            {supplier.map((supplier) => {
             
              return (
               

                  <option value={supplier.id}>{supplier.user.first_name} {supplier.user.last_name}</option>

              )
            })}
                </select>

            
          </div>
          <div className="inputfield">
            <input type="submit" className="btn" />
          </div>
          <Link to='/Producer' className='btn'>Back Producers</Link>
        </form>
      </div>
    </section>
  )
}
export default ProducerForm