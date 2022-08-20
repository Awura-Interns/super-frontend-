import React from 'react'
import { Link } from 'react-router-dom';
import "../../Assets/styles/ProducerList.css"
 const ProducerForm = () => {
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