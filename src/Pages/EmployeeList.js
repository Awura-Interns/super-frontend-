
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/EmployeeList.css"
export default function EmployeeList(){
    return(
        <body>

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