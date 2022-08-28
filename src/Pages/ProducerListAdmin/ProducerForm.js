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
    axios.request({
      method: 'get',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: 'https://dev.api.superlink.awuraplc.org/staff/supplier/'
    }).then(res => {
      console.log(res.data)
      setSupplier(res.data)

    })
  }, [])


  const [employees, setEmployees] = useState([])
   

    
    useEffect(() => {
        setLoading(true)
        axios.request({
            method: 'get',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            url:'https://dev.api.superlink.awuraplc.org/staff/employee/'
        }).then(res => {
            console.log(res.data)
            setEmployees(res.data)
           
        })
        
    }, [])
    const handleSubmit = (event)=>{
      event.preventDefault();
      const data = {
        "image": event.target.product_picture.files[0],
        "doc": event.target.agreement_picture.files[0],
        "product_name": event.target.product_name.value,
        "product_type": event.target.product_type.value,
        "description":event.target.description.value,
        "amount": event.target.amount.value,
        "price": event.target.price.value,
        "discount": event.target.discount.value,
        "producer": event.target.producer.value,
        "posted_by": event.target.posted_by.value
    }
      axios.request({
          method: 'post',
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url:'https://dev.api.superlink.awuraplc.org/products/',
        data
      }).then(res => {
        console.log(res);
      })
    }





  return (
    <section>


      <div className="Employewrapper">
        <div className="title">
          Producer registration
        </div>
        <form className="form"onSubmit={handleSubmit}>
          <div className="inputfield">
            <label for="file">Product Picture</label>
            <input type="file" id="file"  accept="image/*" className="input" name="product_picture"/>
          </div>
          <div className="inputfield">
            <label for="file">agreement Picture</label>
            <input type="file" id="file" accept="image/*" className="input" name="agreement_picture"/>
          </div>
          <div className="inputfield">
            <label> Product Name </label>
            <input type="text" className="input" name="product_name"/>
          </div>
          <div className="inputfield">
            <label>product type</label>
            <input type="text" className="input" name="product_type"/>
          </div>
          <div className="inputfield">
            <label>description</label>
            <input type="textarea" className="input" maxLength="100" placeholder='100 characters' name="description"/>
          </div>
          <div className="inputfield">
            <label>amount</label>
            <input type="number" className="input" placeholder='IN kilogram' name="amount"/>
          </div>
          <div className="inputfield">
            <label>price</label>
            <input type="number" className="input" name="price"/>
          </div>


          <div className="inputfield">
            <label>Discount</label>
            <input type="number" className="input" maxLength="1" placeholder='in percentage' name="discount"/>
          </div>
          <div className="inputfield">
            <label for="file">Producer</label>
            <select className="input" name="producer">
              {supplier.map((supplier) => {
                 const id = supplier.id
                 const splitted_id = id.split('/')
                return (
                  <option value={splitted_id[splitted_id.length - 2]}>{supplier.user.first_name} {supplier.user.last_name}</option>
                )
              })}
            </select>


          </div>
          

          <div className="inputfield">
            <label for="file">posted by</label>
            <select className="input" name="posted_by">
              {employees.map((employee) => {
                const id = employee.id
                const splitted_id = id.split('/')
                
                return (
                  <option value={splitted_id[splitted_id.length - 2]}>{employee.user.first_name} {employee.user.last_name}</option>
                )
              }
              )
              
              
              }
            </select>


          </div>



          <div className="inputfield">
            <input type="submit" className="btn" name="submit"/>
          </div>
          <Link to='/Producer' className='btn'>Back Producers</Link>
        </form>
      </div>
    </section>
  )
}
export default ProducerForm