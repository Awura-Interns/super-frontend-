import { Outlet } from 'react-router-dom';
// import NavBar from '../components/NavBar'
import SideNavBar from '../Components/SideNavBar'
import  Top from "../Components/Top"

const Home = () => {
    return (
        <>
            <SideNavBar />
            <Top/>
         


            <Outlet />

        </>
    );
};
export default Home;