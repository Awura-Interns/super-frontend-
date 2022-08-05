import { useState } from "react";
import Modal from "../Components/Modal";
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
const Index = () => {
  const [isOpen, setisOpen]= useState(false);
  return (

    <>

      <h1> <button onClick={()=> setisOpen(true)} className="btn">open modal</button> </h1>
      {/* <h1> <button onClick={()=> setisOpen(false)} className="btn">cloth modal</button> </h1> */}
      <h1>
      <Modal open={isOpen} onclose={()=> setisOpen(false)}>hiden modal</Modal>
      {/* <Modal open={isOpen} >hiden modal</Modal> */}
        </h1>

    </>

  );
};
export default Index;