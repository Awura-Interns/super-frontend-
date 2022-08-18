
import { Link, useParams } from 'react-router-dom';

const SingleCart = () => {
  
  // const {SupplierId} = useParams();
  // console.log(SupplierId)
  // const supplier =suppliers.find((supplier)=>supplier.id === SupplierId);
  // const {id}=supplier
  return (
    <section className='section cart'>
     
      {/* <h2> {id}</h2> */}
      
      <Link to='/Supplier' className='btn'>Back Suppliers</Link>
    </section>
  );
};

export default SingleCart;
