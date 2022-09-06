import {Outlet } from 'react-router-dom';
import Footer from "../../Components/user/Footer"
import "../../index.css"
const Home = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};
export default Home;
