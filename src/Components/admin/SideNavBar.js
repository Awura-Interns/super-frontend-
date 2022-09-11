import { NavLink } from 'react-router-dom';
import "../../Assets/admin/styles/global.css"
import "../../Assets/admin/styles/SideNavBar.css"
import AuthContext from '../../Auth/AuthContect';
import { useContext } from 'react';


const FontSizeTitle={
    fontSize: "3rem",
    fontWeight: "bolder"

}
const FontSizeBtn={
    fontSize: "1.7rem",
    textTransform: "capitalize"

}
export default function SideNavBar() {
    const { logoutUser } = useContext(AuthContext);
    return (
        <>
        <div class="sidebar" >
                <div class="logo-details">
                    <i class='bx bxl-c-plus-plus'></i>
                    <span class="logo_name" style={FontSizeTitle}>super link</span>
                </div>
                <ul class="nav-links">
                    <li >
                        <NavLink to='/admin-page' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class='bx bxs-home-smile'></i><span class="links_name" style={FontSizeBtn}>home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-page/product' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class='bx bx-box'></i><span class="links_name" style={FontSizeBtn}>Product List</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-page/carts-admin' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class='bx bx-list-ul'></i><span class="links_name" style={FontSizeBtn}>Carts list</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-page/employeeList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class='bx bx-book-alt'></i><span class="links_name" style={FontSizeBtn}>Employee list</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-page/delivery' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class="fa-solid fa-truck-pickup"></i><span class="links_name" style={FontSizeBtn}>Delivery </span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-page/supplier' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i style={FontSizeBtn} class="fa-solid fa-boxes-stacked"></i><span class="links_name" style={FontSizeBtn}>Supplier</span></NavLink>
                    </li>
                    <li>
                        <button className="links_name" type="button" onClick={logoutUser}><i style={FontSizeBtn} class='bx bx-log-in-circle'></i><span class="links_name" style={FontSizeBtn}>Log out</span> </button>
                    </li>
                </ul>
            </div>
        </>)}