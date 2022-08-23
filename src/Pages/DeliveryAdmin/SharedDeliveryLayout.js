import React from 'react'
import { Outlet } from 'react-router-dom';

import SideNavBar from '../../Components/SideNavBar'
import  Top from "../../Components/Top"
import "../../Assets/styles/ListForm.css"
 const SharedDLayout = () => {
  return (
    <><section>
      
    <Outlet />
</section>

</>
  )
}
export default SharedDLayout;