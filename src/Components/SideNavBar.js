import "../Assets/styles/global.css"

import "../Assets/styles/SideNavBar.css"
export default function SideNavBar() {
    return (
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
    )
}