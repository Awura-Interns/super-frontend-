
import { Link, useParams } from 'react-router-dom';

const SingleCart = () => {


  return (

    <section>


      <div class="Employewrapper">
        <div class="title">
          Supplier registration
        </div>
        <form class="form">
          <div class="inputfield">
            <label>First Name</label>
            <input type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>Last Name</label>
            <input type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>Email</label>
            <input type="email" class="input" />
          </div>
          <div class="inputfield">
            <label>Password</label>
            <input type="password" class="input" />
          </div>
          <div class="inputfield">
            <label>Confirm password</label>
            <input type="password" class="input" />
          </div>
          <div class="inputfield">
            <label>Phone</label>
            <input type="tel" class="input" />
          </div>

          <div class="inputfield">
            <label for="file">Profile Picture</label>
            <input type="file" id="file" accept="image/*" class="input" />
          </div>
          <div class="inputfield">
            <label>Birthdate</label>
            <input type="date" class="input" />
          </div>
          <div class="inputfield">
            <label for="file">Id Card</label>
            <input type="file" id="file" accept="image/*" class="input" />
          </div>
          <div class="inputfield">
            <input type="submit" className="btn" />
          </div>
        <Link to='/Supplier' className='btn'>Back Suppliers</Link> 
        </form>
      </div>
    </section>
  );
};

export default SingleCart;
