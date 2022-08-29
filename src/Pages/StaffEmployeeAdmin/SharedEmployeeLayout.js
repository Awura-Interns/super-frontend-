import { Outlet } from 'react-router-dom';
import React from 'react'
import SideNavBar from '../../Components/SideNavBar'
import  Top from "../../Components/Top"
import "../../Assets/styles/ListForm.css"
// export default function SharedEmployeeLayout() {
//   return (
//     <>
//     <Outlet/>
//     </>
//   )
// }
const EM = () => {
  return (
      <><section>
        
       <Outlet />
      </section>

      </>
  );
};
export default EM;
