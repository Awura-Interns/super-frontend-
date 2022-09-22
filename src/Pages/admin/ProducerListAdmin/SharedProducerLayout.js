import React from 'react'
import { Outlet } from 'react-router-dom';

 const SharedProducerLayout = () => {
  return (
    <section>
     <Outlet />
        </section>
  )
}
export default SharedProducerLayout;