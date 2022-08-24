import { Outlet } from 'react-router-dom';
// import NavBar from '../components/NavBar'
import SideNavBar from '../Components/SideNavBar'
import  Top from "../Components/Top"

const Home = () => {
    return (
        <>
           <SideNavBar  name=" it works "/>
            <Top/>
         


            <Outlet />

        </>
    );
};
export default Home;