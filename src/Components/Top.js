import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import axios from "axios";
import logo from "../Assets/img/s.png"
import { useEffect, useState } from 'react'
export default function SideNavBar() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
      setLoading(true)
      axios.request({
        method: 'get',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: 'https://dev.api.superlink.awuraplc.org/api/accounts/account/'
      }).then(res => {
        console.log(res.data)
     setUser(res.data)
      })
    }, [])
  return (
        <div className='home-section'>
<nav>
    <div class="sidebar-button">
        {/* <i class='bx bx-menu sidebarBtn'></i> */}
        <span class="dashboard">Dashboard</span>
    </div>
    <div class="profile-details">
        <img src={logo} alt="" />
        <span class="admin_name">{user.email}</span>
    </div>
</nav>
</div>
    )}