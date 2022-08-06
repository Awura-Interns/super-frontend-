import { useState } from "react";
import Modal from "../Components/Modal";
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/IndexPage.css"
import Login from "../Components/Login"

const Index = () => {
  const [isOpen, setisOpen] = useState(false);
  return (

    <body>
     <div className="container" id="container">

      <div class="hero2">

        <fieldset class="hero2-text">
          {/* <legend class="border-text">&nbsp; be impressed</legend> */}
          <h1 className="headerTitle">login first</h1>
          <p>This is a classy site so it has a serious photo, classic font, and a gold and black colour palette.<br/>
          <br/>
          <button onClick={() => setisOpen(true)} className="btn">open modal</button>
          </p>
          <h1> </h1>
        </fieldset>
      </div>
     </div>


      <h1>
        <Modal open={isOpen} onclose={() => setisOpen(false)}><Login/></Modal>

      </h1>

    </body>

  );
};
export default Index;