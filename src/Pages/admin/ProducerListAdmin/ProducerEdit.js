import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "../../../Assets/admin/styles/ProducerList.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"



const title = {
  
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: "bolder",
  color: "rgb(2, 2, 56)"
}
const regForm={
  fontWeight:"700"
}
const subBtn={
  fontSize:"2rem",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}
const backBtn={
  fontSize:"2rem",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  backgroundColor: "transparent"
}
const ProducerForm = () => {
  const [supplier, setSupplier] = useState([])
  const [product, setProduct] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
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
useEffect(() => {
    setLoading(true)
    axios.request({
      method: 'get',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: `https://dev.api.superlink.awuraplc.org/staff/admin-product/${id}/`
    }).then(res => {
      console.log(res.data)
      setProduct(res.data)
    })
  }, [])
    useEffect(() => {
    setLoading(true)
    axios.request({
      method: 'get',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: 'https://dev.api.superlink.awuraplc.org/staff/employee/'
    }).then(res => {
      console.log(res.data)
      setEmployees(res.data)
    })
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      "image": event.target.product_picture.files[0],
      "doc": event.target.agreement_picture.files[0],
      "product_name": event.target.product_name.value,
      "product_type": event.target.product_type.value,
      "description": event.target.description.value,
      "amount": event.target.amount.value,
      "price": event.target.price.value,
      "discount": event.target.discount.value,
      "producer": event.target.producer.value,
      "posted_by": event.target.posted_by.value
    }
    axios.request({
      method: 'patch',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: `https://dev.api.superlink.awuraplc.org/products/${id}/`,
      data
    }).then(res => {
      console.log(res);
    }).catch(error => {
      if (error.response) {
        setFormErrors(error.response.data);
      }
    })
  }
  return (
    <section>
      <div className="Employewrapper">
        <div style={title} className="title">
        Product update form
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Form.Group className="inputfield">
            <Form.Label style={regForm} for="file">Product Picture</Form.Label>
            <div style={{ width: "100%" }}>
                <a href={`${product ? product.image : null}`}>hello</a>
              <Form.Control isInvalid={formErrors.image} type="file" id="file" accept="image/*" className="input" name="product_picture" />
              <Form.Control.Feedback type="invalid">
                {formErrors.image ? formErrors.image : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm} for="file">agreement Picture</Form.Label>
            <div style={{ width: "100%" }}>
            <a href={`${product ? product.agreement_picture : null}`}>hello</a>
              <Form.Control isInvalid={formErrors.doc} type="file" id="file" accept="image/*" className="input" name="agreement_picture" />
              <Form.Control.Feedback type="invalid">
              {formErrors.doc ? formErrors.doc : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}> Product Name </Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.product_name} defaultValue={product ? product.product_name : null} type="text" className="input" name="product_name" />
              <Form.Control.Feedback type="invalid">
              {formErrors.product_name ? formErrors.product_name : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}>product type</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.product_type} 
              defaultValue={product ? product.product_type : null} type="text" className="input" name="product_type" />
              <Form.Control.Feedback type="invalid">
              {formErrors.product_type ? formErrors.product_type : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}>description</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.description} 
              defaultValue={product ? product.description : null}type="textarea" className="input" maxLength="100" placeholder='100 characters' name="description" />
              <Form.Control.Feedback type="invalid">
              {formErrors.description ? formErrors.description : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}>amount</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.amount}
              defaultValue={product ? product.amount : null} type="number" className="input" placeholder='IN kilogram ' name="amount" />
              <Form.Control.Feedback type="invalid">
              {formErrors.amount ? formErrors.amount : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}>price</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.price}
              defaultValue={product ? product.price : null}  type="number" className="input" name="price" maxLength="4" placeholder='4 digits ' />
              <Form.Control.Feedback type="invalid">
              {formErrors.price ? formErrors.price : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm}>Discount</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.discount}
              defaultValue={product ? product.discount : null}  type="number" className="input" maxLength="1" placeholder='in percentage' name="discount" />
              <Form.Control.Feedback type="invalid">
              {formErrors.discount ? formErrors.discount : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm} for="file">Producer</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Select isInvalid={formErrors.producer} 
              className="input" name="producer">
                <option selected="selected">{product ? product.producer : null} </option>
                {supplier.map((supplier) => {
                  const id = supplier.id
                  const splitted_id = id.split('/')
                  return (
                    <option value={splitted_id[splitted_id.length - 2]}>{supplier.user.first_name} {supplier.user.last_name}</option>
                  )
                })}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
              {formErrors.producer ? formErrors.producer : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label style={regForm} for="file">posted by</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Select isInvalid={formErrors.posted_by} className="input" name="posted_by">
              <option selected="selected">{product ? product.posted_by : null} </option>
                {employees.map((employee) => {
                  const id = employee.id
                  const splitted_id = id.split('/')
                  return (
                    <option value={splitted_id[splitted_id.length - 2]}>{employee.user.first_name} {employee.user.last_name}</option>
                  )
                }
                )
                }
              </Form.Select>
              <Form.Control.Feedback type="invalid">
              {formErrors.posted_by ? formErrors.posted_by : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <div className="inputfield">
            <button className="btn" style={subBtn}> update </button>
          </div>
          <Link to='/admin-page/product' className='btn' style={backBtn}>Back Producers</Link>
        </form>
      </div>
    </section>
  )
}
export default ProducerForm