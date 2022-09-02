import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "../../Assets/styles/ProducerList.css"
import axios from "axios";
import { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
const ProducerForm = () => {
  const [supplier, setSupplier] = useState([])
  const [loading, setLoading] = useState(true)
  const [formErrors, setFormErrors] = useState({})
  const navigate=useNavigate();
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
      method: 'post',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
      },
      url: 'https://dev.api.superlink.awuraplc.org/products/',
      data
    }).then(res => {
      console.log(res);
      navigate(-1)
    }).catch(error => {
      if (error.response) {
        setFormErrors(error.response.data);
      }
    })
  }
  return (
    <section>
      <div className="Employewrapper">
        <div className="title">
          Producer registration
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Form.Group className="inputfield">
            <Form.Label for="file">Product Picture</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.image} type="file" id="file" accept="image/*" className="input" name="product_picture" />
              <Form.Control.Feedback type="invalid">
                {formErrors.image ? formErrors.image : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label for="file">agreement Picture</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.doc} type="file" id="file" accept="image/*" className="input" name="agreement_picture" />
              <Form.Control.Feedback type="invalid">
              {formErrors.doc ? formErrors.doc : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label> Product Name </Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.product_name}  type="text" className="input" name="product_name" />
              <Form.Control.Feedback type="invalid">
              {formErrors.product_name ? formErrors.product_name : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label>product type</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.product_type} type="text" className="input" name="product_type" />
              <Form.Control.Feedback type="invalid">
              {formErrors.product_type ? formErrors.product_type : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label>description</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.description} type="textarea" className="input" maxLength="100" placeholder='100 characters' name="description" />
              <Form.Control.Feedback type="invalid">
              {formErrors.description ? formErrors.description : null}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label>amount</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.amount} type="number" className="input" placeholder='IN kilogram ' name="amount" />
              <Form.Control.Feedback type="invalid">
              {formErrors.amount ? formErrors.amount : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label>price</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.price} type="number" className="input" name="price" maxLength="4" placeholder='4 digits ' />
              <Form.Control.Feedback type="invalid">
              {formErrors.price ? formErrors.price : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label>Discount</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Control isInvalid={formErrors.discount} type="number" className="input" maxLength="1" placeholder='in percentage' name="discount" />
              <Form.Control.Feedback type="invalid">
              {formErrors.discount ? formErrors.discount : null}.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="inputfield">
            <Form.Label for="file">Producer</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Select isInvalid={formErrors.producer} className="input" name="producer">
                <option> </option>
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
            <Form.Label for="file">posted by</Form.Label>
            <div style={{ width: "100%" }}>
              <Form.Select isInvalid={formErrors.posted_by} className="input" name="posted_by">
                <option> </option>
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
            <input type="submit" className="btn" name="submit" />
          </div>
          <Link to='/product' className='btn'>Back Producers</Link>
        </form>
      </div>
    </section>
  )
}
export default ProducerForm