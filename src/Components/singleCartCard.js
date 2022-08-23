import { Link } from "react-router-dom";
import "./singleitemcard.css"

export default function SingleItemCard({ product,trigger,settrigger }) {




  return (
    <>{trigger?
      <div className="outerpopout">
        <div className="flex w-full max-w-[600px] bg-gray-700 py-10 px-14 rounded-lg shadow-lg justify-around items-center">
      <img src={product.image} className="w-[200px] h-[200px]" />
      <div className="text-2xl flex flex-col h-full justify-around text-gray-300">
        <p>{product.description}</p>
        <p>
          <b>Type</b>: {product.product_type}
        </p>
        <p>
          <b>Amount</b>: {product.amount}
        </p>
        <p>
          <b>Price</b>: {product.price}
        </p>
        <p>
          <b>Discount</b>: {product.discount}
        </p>
        <Link to="">
          <button
            type="button"
            class="py-2.5 px-14 mr-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add to List
          </button>
        </Link>
        <button onClick={()=>settrigger(!trigger)}>return</button>
      </div>
    </div>
      </div>:''}</>
  );
}
