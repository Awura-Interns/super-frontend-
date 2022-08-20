import Cart from "./Cart";
import "../Assets/styles/App.css";
import React, { useState, useEffect } from "react";
import Amazon from "./amazon";
import Navbar from "../Components/Navbar";
import ItemCard from "../Components/item-card";
import items from "../local-data/items.json";

const UPP = () => {
  console.log("hello");
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar setShow={setShow} size={cart.length} />
      <div className="text-center text-4xl font-bold text-white py-14 bg-gray-800">
        Eheloch
        </div>
      <div className="w-screen px-20 flex justify-center py-14">
        <div className="flex bg-gray justify-around max-w-[800px] gap-10 flex-wrap">
          {items.map((item, index) => (
            <ItemCard item={item} key={index} />
          ))}
        </div>
      </div>
      {/* {show ? (
          <Amazon handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )} */}
    </div>
  );
};

export default UPP;
