import "../Assets/styles/Carts.css"
import { Link } from 'react-router-dom';
import carts from '../Helpers/CartData';
import * as ReactBootStrap from 'react-bootstrap'
const Carts = () => {
  return (
    <div className="whole">
      <h1>Carts list</h1>
     




        <div className='cart'>
          
              <article   >



                <div >
                  <ReactBootStrap.Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>user id</th>
                        <th>order date</th>
                        <th>closed time</th>
                        <th>More</th>
                      </tr>
                    </thead>
                    <tbody>
                    {carts.map((cart) =>{
                      return(
                        
                      <tr key={cart.id}>
                        <td>{cart.id}</td>
                        <td>{cart.user}</td>
                        <td>{cart.order_date}</td>
                        <td>{cart.closed_time}</td>
                        <td><Link to={`/carts/${cart.id}`}>more info</Link></td>
                      </tr>
                      )
                    })}


                    </tbody>
                  </ReactBootStrap.Table>
                </div>
              </article>
           
        </div>


     
    </div>
  );
};

export default Carts;
