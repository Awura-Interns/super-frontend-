import React from 'react'
import {Outlet} from 'react-router-dom'

const SharedHomeLayout = () => {
  return (
  <>
  {/* <Navbar/> */}

  <Outlet/>
  
  

  </>
  )
}

export default SharedHomeLayout