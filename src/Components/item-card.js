import { Link } from "react-router-dom";

import SingleItemCard from "./singleCartCard";
import { useState } from "react";

export default function ItemCard({ item }) {
  const [truth, settruth] = useState(false);

  return (
    <>
      <div className="bg-white px-5 py-10 border shadow-sm rounder">
        <p className="font-bold text-2xl">{item.product_name}</p>
        <img src={item.image} className="h-[130px] w-[130px] shadow-lg my-5" />
        <button onClick={() => settruth(!truth)} to={`/products/` + item.id}>
          See More
        </button>
      </div>
      <SingleItemCard
        trigger={truth}
        product={item}
        settrigger={settruth}
      ></SingleItemCard>
    </>
  );
}
