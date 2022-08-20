import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Help from "./Pages/Help";
// import Account from "./Pages/Account"
import Cart from "./Pages/Cart";

import UPP from "./Pages/UPP";
import Modal from "./Components/Modal";
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
import SharedLayOut from "./Pages/SharedLayOut";
import "../src/Assets/styles/App.css";
import SingleCart from "./Pages/single-cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Landingpage />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Help" element={<Help />} />
        <Route path="Signup" element={<Signup />} />
        {/* <Route path="Account" element={<Account/>}/> */}
        <Route path="Cart" element={<Cart />} />
        <Route path="products/:id" element={<SingleCart />} />
        {/* <Route path="Cards" element={<Cards/>}/> */}
        <Route path="UPP" element={<UPP />} />
        <Route path="Modal" element={<Modal />} />
      </Route>
    </Routes>
    // <>Cool</>
  );
}

export default App;
