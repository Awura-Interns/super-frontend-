
import "../Assets/styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../Components/Navbar";
import ItemCard from "../Components/item-card";
import items from "../local-data/items.json";

const Home = () => {
  const [data,setdata]=useState([])
  // useEffect(()=>{
  //   const item=axios.get("http/hsdffa;ldj").then(res=>{
  //      data=res.data

  //   }).catch(err=>
  //      data="error")
  // })
  // const mesale=(id,name)=>{
  //   axios.post('http',{
  //     id:`${id}`,
  //     name:`${name}`
  //   })
  //   axios.delete('httpjf;lkjf/3')
  // }


  console.log("hello");
  const [show, setShow] = useState(true);
  const [truth,settruth]=useState(false);
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
            // <SingleItemCard trigger={truth} product={product} />
            <ItemCard   item={item} key={index} />
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

export default Home;
