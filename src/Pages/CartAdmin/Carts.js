import "../../Assets/styles/Carts.css"
import { Link } from 'react-router-dom';
import carts from '../../Helpers/CartData';

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
                        <th>Action</th>
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
                        <td><div className="action_btn"> 
                          <button className="edite" title="edite"><i className='bx bxs-trash-alt'></i></button>
                          <button className="delete" title="delete"><i className='bx bx-pencil'></i></button>
                          </div> </td>
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
