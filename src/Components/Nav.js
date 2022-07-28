import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Profile'>Profile</NavLink></li>
        <li><NavLink to='/Signin'>Products</NavLink>
</li>
        <li><NavLink to='/Signup'>Signup</NavLink></li>
        <li><NavLink to='/Account'>Account</NavLink></li>
        <li> <NavLink to='/Cart'>Cart</NavLink></li>
      </ul>
      
      
      
      

      
    </nav>
  );
};
export default Nav;