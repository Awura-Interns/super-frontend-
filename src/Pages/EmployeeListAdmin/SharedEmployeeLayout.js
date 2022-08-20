import { Outlet } from 'react-router-dom';
import React from 'react'

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
