import "../../Assets/user/styles/App.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/user/Navbar";
import SingleItemCard from "../../Components/user/singleCartCard";
import { useParams } from "react-router-dom";
import Loading from "../../Components/user/loading";
import { getProductById } from "../../Helpers/user/products";

export default function SingleCart() {
  const params = useParams();
  const [truth,settruth]=useState(false)
  const [product,setProduct] = useState(null)
  const [error,setError] = useState('')
  const [pageContent, setPageContent] = useState(
    <div className="flex items-center justify-center w-full h-screen">
      <Loading />
    </div>
  );
  useEffect(() => {
    async function fetchProduct() {
      const id = params.id;
      const product = await getProductById(id);
      console.log('product is',product)
      setProduct(product)
    }
    fetchProduct().catch((e) => {
      console.log(e);
      setError('error')
      // setPageContent(
      //   <div className="text-center text-4xl font-bold text-white py-14 bg-gray-800">
      //     ERROR!
      //   </div>
      // );
    });
  }, []);

  if(product === null) {
    return <p>loading</p>
  }
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <main>
          <div className="text-center text-4xl font-bold text-white py-14 bg-gray-800">
            {product.product_name}
          </div>
          <div className="w-screen px-20 flex justify-center py-14">
            <SingleItemCard trigger={truth} product={product} />
          </div>
      </main>
    </div>
  );
}
