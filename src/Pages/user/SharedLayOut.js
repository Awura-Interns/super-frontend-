import {Outlet } from 'react-router-dom';
import Footer from "../../Components/user/Footer"
const Home = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};
export default Home;
