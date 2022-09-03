import "../Assets/styles/singleitemcard.css";
import http from "../services/http";
import endpoints from "../services/endpoints";

export default function SingleItemCard({ product, trigger, settrigger }) {
  return (
    <>
      {trigger ? (
        <div
          className="outerpopout"
          style={{
            position: "absolute",

            top: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "#00000080",
          }}
        >
          <div className="flex flex-column justify-content-center align-items-sm-center align-items-start flex-md-row bg-white p-4 rounder">
            <div
              className="rounder"
              style={{
                height: "250px",
                width: "300px",
                backgroundImage: `url("${product.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="m-3"></div>
            <div
              style={{
                maxWidth: "250px",
              }}
            >
              <p className="fw-bold text-capitalize fs-4">
                {product.product_name}
              </p>
              <p>
                <b>Type</b>: {product.product_type}
              </p>
              <p>
                <b>Amount</b>: {product.amount}
              </p>
              <p>
                <b>Price</b>: {product.price}
              </p>
              <p className="text-danger">
                <b>Discount</b>: -{product.discount}
              </p>
              <p>
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
                {product.description}
              </p>
              <div className="flex justify-content-between">
                <button
                  className="text-decoration-underline"
                  onClick={() => settrigger(!trigger)}
                >
                  return
                </button>
                <button
                  className="btn btn-outline-primary py-3"
                  onClick={() => {
                    var accessToken = localStorage.getItem("accessToken");
                    console.log(accessToken);
                    console.log("accessToken");
                    console.log(product);
                    console.log("product");
                    http({
                      method: "POST",
                      url: endpoints.addToCart,
                      header: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                      data: {
                        product: product.id,
                        quantity: 1,
                      },
                    })
                      .then((response) => {
                        console.log("response add to cart");
                        console.log(response);
                        // setItems(response.data);
                      })
                      .catch((error) => {
                        console.log("error add to cart");
                        console.log(error);
                        // var errorMessages = [];
                        // for (var errorMessage in error) {
                        //   errorMessages.push(
                        //     `${errorMessage}: ${error[errorMessage].toString()}`
                        //   );
                        // }
                        // setErrorMessages(errorMessages);
                      });
                  }}
                  type="button"
                  class="py-2.5 px-14 mr-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
