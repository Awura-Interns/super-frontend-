import React from 'react'
import { Outlet } from 'react-router-dom';
import SideNavBar from '../../Components/SideNavBar'
import  Top from "../../Components/Top"
 const SharedProducerLayout = () => {
  return (
    <>
    
     <Outlet />
        </>
  )
}
export default SharedProducerLayout;