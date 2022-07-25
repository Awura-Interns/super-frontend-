import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/Add.css"
const Add =()=>{
    return(
        



        <body>

        <div class="sidebar">
          <div class="logo-details">
            <i class='bx bxl-c-plus-plus'></i>
            <span class="logo_name">super link</span>
          </div>
          <ul class="nav-links">
            <li>
              <a href="/index.html" >
                <i class='bx bx-grid-alt'></i>
                <span class="links_name">Dashboard</span>
              </a>
            </li>
           
            <li>
              <a href="/producerlist.html">
                <i class='bx bx-box'></i>
                <span class="links_name">Producer List</span>
              </a>
            </li>
            <li>
              <a href="/order-list.html">
                <i class='bx bx-list-ul'></i>
                <span class="links_name">Order list</span>
              </a>
            </li>
      
            <li>
              <a href="/item-list.html">
                <i class='bx bx-coin-stack'></i>
                <span class="links_name">Item List</span>
              </a>
            </li>
            <li>
              <a href="/employee-list.html">
                <i class='bx bx-book-alt'></i>
                <span class="links_name">Employee list</span>
              </a>
            </li>
      
      
            <li>
              <a href="/my-profile.html">
                <i class='bx bx-cog'></i>
                <span class="links_name">My profile</span>
              </a>
            </li>
      
            <li>
              <a href="add.html">
                <i class='bx bx-cog'></i>
                <span class="links_name">Add </span>
              </a>
            </li>
            <li class="log_out">
              <a href="../super_link/super.html">
                <i class='bx bx-log-out'></i>
                <span class="links_name">Log out</span>
              </a>
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
              <span class="admin_name">super link</span>
             
            </div>
          </nav>
      
          <div class="home-content">
      
            <div class="sales-boxes">
      
              
              <div class="wrapper">
                <div class="title">
                  Registration movie
                </div>
                <div class="form">
                  <div class="inputfield">
                    <label for="file"> choose an image</label>
                    <input type="file" id="file" accept="image/*" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>item Name</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>producer Name</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>Amount delivered</label>
                    <input type="text" class="input"/>
                  </div>
      
                  <div class="inputfield">
                    <label>Amount of money  </label>
                    <input type="text" class="input"/>
                  </div>
                 
      
                  <div class="inputfield">
                    <label>delivered date</label>
                    <input type="date" class="input"/>
                  </div>
                
      
                  <div class="inputfield">
                    <label>Code</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield terms">
                    <label class="check">
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                    </label>
                    <p>Post on the front page</p>
                  </div>
                  <div class="inputfield">
                    <input type="submit" value="submit" class="btn"/>
                  </div>
                </div>
              </div>
      
      
      
      
              <div class="wrapper">
                <div class="title">
                  employee registration
                </div>
                <div class="form">
                  <div class="inputfield">
                    <label for="file"> choose an image</label>
                    <input type="file" id="file" accept="image/*" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>Full Name</label>
                    <input type="text" class="input"/>
                  </div>
      
                  <div class="inputfield">
                    <label>postion</label>
                    <div class="custom_select">
                      <select>
                        <option value="">Select</option>
                        <option value="action">action</option>
                        <option value="main employee">main employee
                        </option>
                        <option value="producer">producer
                        </option>
                        <option value="delivery driver">delivery driver
                        </option>
                        
                      </select>
                    </div>
                  </div>
      
                  <div class="inputfield">
                    <label>registered date</label>
                    <input type="date" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>description</label>
                    <textarea class="textarea"></textarea>
                  </div>
                  <div class="inputfield">
                    <label>Code</label>
                    <input type="text" class="input"/>
                  </div>
                 
                  <div class="inputfield">
                    <input type="submit" value="submit" class="btn"/>
                  </div>
                </div>
              </div>
      </div>
      
              
            </div>
        </section>
      
        
      
      </body>
    )
}
export default Add;