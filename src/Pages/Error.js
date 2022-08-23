import { Link } from 'react-router-dom';
import SideNavBar from '../Components/SideNavBar'
import  Top from "../Components/Top"
const Error = () => {
  return (
    <section className='section'>
     
      <h2>Error</h2>
      <p>page not found</p>
      <Link to={"/"} className="btn">BACK HOME</Link>
          </section>
  );
};
export default Error;
