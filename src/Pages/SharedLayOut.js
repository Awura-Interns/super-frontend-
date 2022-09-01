import {Outlet } from 'react-router-dom';
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};
export default Home;
