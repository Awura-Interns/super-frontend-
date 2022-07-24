import { Outlet } from 'react-router-dom';
// import NavBar from '../components/NavBar'
import SideNavBar from '../Components/SideNavBar'
const Home = () => {
    return (
        <>
            <SideNavBar />
         


            <Outlet />

        </>
    );
};
export default Home;