import { Outlet } from 'react-router-dom';
import React from 'react'
import SideNavBar from '../../Components/SideNavBar'
import  Top from "../../Components/Top"

const Supplier = () => {
  return (
      <section>
        
          <Outlet />
      </section>
      
  );
};
export default Supplier;