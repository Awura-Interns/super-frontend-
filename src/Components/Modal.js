import React, { useState } from "react";

import Signin from "../Pages/Signin";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Modal">
       <div id="login-btn" 
      
        className="fas fa-user"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        </div>
    

      {modalOpen && <Signin setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal