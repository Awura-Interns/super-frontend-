import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Help from "./Pages/Help";

import Home from "./Pages/Home";
import SharedLayOut from "./Pages/SharedLayOut";
import SharedHomeLayout from "./Pages/SharedHomeLayout";
import "../src/Assets/styles/App.css";
import Cart from "./Pages/cart";
import Chat from "./Pages/chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Landingpage />} />
        <Route path="Home" element={<SharedHomeLayout />}>
          <Route index element={<Home />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="cart" element={<Cart />} />
          <Route path="chat" element={<Chat />} />
          <Route path="Help" element={<Help />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
