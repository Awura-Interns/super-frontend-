import { NavLink } from 'react-router-dom';
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
const Index = () => {
  return (

    <body>

      <section class="home-section">
        

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Order</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bx-cart-alt cart'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Sales</div>
                <div class="number">38,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bxs-cart-add cart two'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Profit</div>
                <div class="number">$12,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bx-cart cart three'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Return</div>
                <div class="number">11,086</div>
                <div class="indicator">
                  <i class='bx bx-down-arrow-alt down'></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
              <i class='bx bxs-cart-download cart four'></i>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Recent Sales</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">Date</li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink>   </li>
                  <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>02 Jan 2021</NavLink></li>
                </ul>
                <ul class="details">
                  <li class="topic">Customer</li>
                  <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Alex Doe</NavLink></li>
                </ul>
                <ul class="details">
                  <li class="topic">Sales</li>
                  <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Delivered</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Pending</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Returned</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Delivered</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Pending</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Returned</NavLink></li>
                  <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Delivered</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Pending</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>Delivered</NavLink></li>
                </ul>
                <ul class="details">
                  <li class="topic">Total</li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                  <li><NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>$204.98</NavLink></li>
                </ul>
              </div>
              <div class="button">
               
                <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>See All</NavLink>
              </div>
            </div>
            <div class="top-sales box">
              <div class="title">Top Seling Product</div>
              <ul class="top-sales-details">
                <li>
                  
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}><span class="product">Vuitton Sunglasses</span></NavLink>
                  <span class="price">$1107</span>
                </li>
                <li>
                 
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}> <span class="product">Hourglass Jeans </span></NavLink>
                  <span class="price">$1567</span>
                </li>
                <li>
                  
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}> <span class="product">Nike Sport Shoe</span></NavLink>
                  <span class="price">$1234</span>
                </li>
                <li>
                  
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}>  <span class="product">Hermes Silk Scarves.</span></NavLink>
                  <span class="price">$2312</span>
                </li>
                <li>
                
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}><span class="product">Succi Ladies Bag</span></NavLink>
                  <span class="price">$1456</span>
                </li>
                <li>
                
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}><span class="product">Gucci Womens's Bags</span></NavLink>
                  <span class="price">$2345</span>
                </li>
                <li>
                
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}><span class="product">Addidas Running Shoe</span></NavLink>
                  <span class="price">$2345</span>
                </li>
                <li>
                  
                  <NavLink to='/' className={({ isActive }) => (isActive ? 'name' : 'name')}><span class="product">Bilack Wear's Shirt</span></NavLink>
                  <span class="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </body>

  );
};
export default Index;