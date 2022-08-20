import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white px-5 py-10 shadow-lg">
      <p className="font-bold text-2xl">{item.product_name}</p>
      <img src={item.image} className="h-[130px] w-[130px] shadow-lg my-5"/>
      <Link to={`/products/`+item.id}>
        See More
      </Link>
    </div>
  );
}
