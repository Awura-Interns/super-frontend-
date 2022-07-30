import "../Assets/styles/Carts.css"
import { Link } from 'react-router-dom';
import carts from '../Helpers/CartData';
const Carts = () => {
  return (
    <section className='section carts'>
      <h1>Carts list</h1>
      <h2>carts</h2>
      <div className='cart'>
        {carts.map((cart) => {
          return (
            <article key={cart.id}>
              <h5>{cart.user}</h5>
              {/* <h5>{cart.order_date}</h5>
              <h5>{cart.delivery_man}</h5>
              <h5>{cart.closed}</h5>
              <h5>{cart.payed}</h5>
              <h5>{cart.closed_time}</h5> */}
              <Link to={`/carts/${cart.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Carts;
