import { Outlet } from 'react-router-dom';
import React from 'react'

import "../Assets/styles/EmployeeList.css"
// export default function SharedEmployeeLayout() {
//   return (
//     <>
//     <Outlet/>
//     </>
//   )
// }
const Employee = () => {
  return (
      <><section>
          

        
       


          <Outlet />
      </section>

      </>
  );
};
export default Employee;
