import React from 'react'
import ReactDom from 'react-dom'
const MODAL_STYLES = {
  position: 'absolute',
  top:'0px',
  bottom:'0px',
  right:'0px',
  left:'0px', 
  margin: 'auto',
  backgroundColor: '#fff',
  zIndex: 1000,
  background: '#fff',
  width: '30%',
  height: '65%',
}


const OVERLAY_STYLES = {
  position: 'absolute',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zInedx: 1000
}
export default function Model({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal (
   <>
   <div style={OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
      <button class="cur" onClick={onClose}>&times;</button>

      {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}
