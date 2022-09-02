import { Outlet } from 'react-router-dom';
import React from 'react'
import "../../Assets/styles/ListForm.css"

const SharedEmployeeLayout = () => {
  return (
      <><section>
        
       <Outlet />
      </section>

      </>
  );
};
export default SharedEmployeeLayout;
