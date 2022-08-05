import React from 'react'
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
export default function Modal({open,children,onclose}) {

    if(!open) return null
    
  return (
    <div><button onClick={onclose} className='btn'>Close modal</button>
        {children}
        </div>
  )
}

// my vertion
// export default function Modal({open,children}) {
//     if(!open) return null
    
//   return (
//     <div>
//         {children}
//         </div>
//   )
// }
