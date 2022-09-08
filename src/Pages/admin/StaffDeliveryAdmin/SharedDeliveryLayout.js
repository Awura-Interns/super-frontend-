import React from 'react'
import { Outlet } from 'react-router-dom';
import "../../../Assets/admin/styles/ListForm.css"
 const SharedDLayout = () => {
  return (
    <section>
    <Outlet />
</section>
  )
}
export default SharedDLayout;