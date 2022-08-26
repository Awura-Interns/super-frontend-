import "../src/Assets/styles/App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import MyOrder from "./Pages/MyOrder";
import MyProfile from "./Pages/MyProfile";
import SharedLayout from "./Pages/SharedLayout";
import SharedHomeLayout from "./Pages/SharedHomeLayout";

function App() {
  
  return (
 
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/SignUp" element={<SignUp />}/>
        </Route>

        <Route path="/Home" element={<SharedHomeLayout />}>
          <Route index element={<Home/>} />
          <Route path="MyOrder" element={<MyOrder />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Route>
      </Routes>
  );
}

export default App;
