
import { Link, useParams } from 'react-router-dom';
import carts from '../Helpers/CartData';

const SingleCart = () => {
  
  const {cartId} = useParams();
  console.log(cartId)
  const cart =carts.find((cart)=>cart.id === cartId);
  const {user, order_date}=cart
  return (
    <section className='section cart'>
      
      <h2> {user}</h2>
      <h2> {order_date}</h2>
      <Link to='/carts' className='btn'>Back carts</Link>
    </section>
  );
};

export default SingleCart;
