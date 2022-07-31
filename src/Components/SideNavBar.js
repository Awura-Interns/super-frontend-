import { NavLink } from 'react-router-dom';
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import '../Assets/js/SideBtn'

export default function SideNavBar() {
    return (
        <>
        
        <div class="sidebar">
        
            <div class="logo-details">
                <i class='bx bxl-c-plus-plus'></i>
                <span class="logo_name">super link</span>
            </div>
            <ul class="nav-links">
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-grid-alt'></i><span class="links_name">Dashboard</span></NavLink>
                </li>

                <li>

                    <NavLink to='/ProducerList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-box'></i><span class="links_name">Producer List</span></NavLink>
                </li>
                <li>

                    <NavLink to='/OrderList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-list-ul'></i><span class="links_name">Order list</span></NavLink>
                </li>

                <li>

                    <NavLink to='/NoPage' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-coin-stack'></i><span class="links_name">Item List x</span></NavLink>
                </li>
                <li>

                    <NavLink to='/EmployeeList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-book-alt'></i><span class="links_name">Employee list</span></NavLink>
                </li>



                <li>

                    <NavLink to='/MyProfile' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-cog'></i><span class="links_name">My profile</span></NavLink>

                </li>

                <li>

                    <NavLink to='/Add' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-add-to-queue'></i><span class="links_name">Add</span></NavLink>
                </li>


                <li>

                    <NavLink to='/carts' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bxs-cart-alt'></i><span class="links_name">Cart</span></NavLink>
                </li>
                <li class="log_out">

                    <NavLink to='/NoPage' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-log-out'></i><span class="links_name">Log out</span></NavLink>
                </li>
            </ul>
           
        </div>
       
        </>
    )
}