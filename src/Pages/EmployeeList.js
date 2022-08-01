import { NavLink } from 'react-router-dom';
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/EmployeeList.css"
export default function EmployeeList(){
    return(
        <body>
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
      <li class="log_out">
      <NavLink to='/NoPage' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-log-out'></i><span class="links_name">Log out</span></NavLink>
      </li>
    </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search'></i>
      </div>
      <div class="profile-details">
        <img src="images/image.jpg" alt=""/>
        <span class="admin_name">ayssikiyas</span>
      </div>
    </nav>
    <div class="home-content">

      <div class="sales-boxes">

    

      <div class="user">
         <img src="images/user-icon.png" alt=""/>
         <p><i class="fas fa-user"></i><span>d<span>sdas</span></span></p>
         <p><i class="fas fa-phone"></i><span>023541</span></p>
         <p><i class="fas fa-envelope"></i><span>dssdsd@</span></p>
         <p><i class="fas fa-map-marker-alt"></i><span>work postion</span></p>
         
         
         <input  class="btn" type="submit" value="update info" />
         <p class="address"><i class="fas fa-map-marker-alt"></i><span>sdcsdsd</span></p>
         
    
         <input  class="btn" type="submit" value="update address" />
      </div>

      <div class="user">
        <img src="images/user-icon.png" alt=""/>
        <p><i class="fas fa-user"></i><span>d<span>sdas</span></span></p>
        <p><i class="fas fa-phone"></i><span>023541</span></p>
        <p><i class="fas fa-envelope"></i><span>dssdsd@</span></p>
        <p><i class="fas fa-map-marker-alt"></i><span>work postion</span></p>
        <input  class="btn" type="submit" value="update info" />
        <p class="address"><i class="fas fa-map-marker-alt"></i><span>sdcsdsd</span></p>
        <input  class="btn" type="submit" value="update address" />
     </div>


     

   
   
</div>
</div>
</section>
  

</body>
    )
}