import {Outlet } from 'react-router-dom';

import Nav from '../Components/Nav';
const Home = () => {
  return (
    <>
      <Nav/>
      <Outlet />
    </>
  );
};
export default Home;
