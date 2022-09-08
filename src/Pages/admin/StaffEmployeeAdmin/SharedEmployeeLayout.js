import { Outlet } from 'react-router-dom';
import React from 'react'
import "../../../Assets/admin/styles/ListForm.css"

// const styleChange={
//   position:"absolute",
//   right:"0px",
//   top:"80px",
  
  

// }
const SharedEmployeeLayout = () => {
  return (
      <section>
        
       <Outlet />
      </section>

      
  );
};
export default SharedEmployeeLayout;
