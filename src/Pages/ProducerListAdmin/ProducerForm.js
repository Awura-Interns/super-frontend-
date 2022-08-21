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


      <div class="Employewrapper">
        <div class="title">
        Producer registration
        </div>
        <form class="form">
        <div class="inputfield">
            <label for="file">Product Picture</label>
            <input type="file" id="file" accept="image/*" class="input" />
          </div>
          <div class="inputfield">
            <label for="file">agreement Picture</label>
            <input type="file" id="file" accept="image/*" class="input" />
          </div>
          <div class="inputfield">
            <label>product_name </label>
            <input type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>product type</label>
            <input type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>description</label>
            <input type="textarea" class="input" maxlength="100"  placeholder='100 characters'/>
          </div>
          <div class="inputfield">
            <label>Amount</label>
            <input type="number" class="input" placeholder='IN kilogram' />
          </div>
          <div class="inputfield">
            <label>price</label>
            <input type="number" class="input" />
          </div>

          
          <div class="inputfield">
            <label>Discount</label>
            <input type="number" class="input"  maxlength="1" placeholder='in percentage'/>
          </div>
          {/* <div class="inputfield">
            <label for="file">Id Card</label>
            <input type="file" id="file" accept="image/*" class="input" />
          </div>*/}
          <div class="inputfield">
            <input type="submit" className="btn" />
        </div> 
        <Link to='/Producer' className='btn'>Back Producers</Link> 
        </form>
      </div>
    </section>
  )
}
export default ProducerForm