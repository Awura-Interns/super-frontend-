import { Outlet } from 'react-router-dom';

import SideNavBar from '../Components/SideNavBar'
import  Top from "../Components/Top"

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