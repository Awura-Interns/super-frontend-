import { Outlet } from 'react-router-dom';
import SideNavBar from '../../Components/admin/SideNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Top from "../../Components/admin/Top"
const Home = () => {
    return (
        <>
           <SideNavBar  name=" sidenav bar "/>
            <Top/>
            <Outlet />

        </>
    );
};
export default Home;