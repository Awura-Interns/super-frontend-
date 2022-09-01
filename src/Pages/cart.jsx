import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import http from "../services/http";
import endpoints from "../services/endpoints";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const [errorMessage, setErrorMessage] = useState({});
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    var accessToken = localStorage.getItem("accessToken");

    http({
      method: "GET",
      url: endpoints.getCartItem,
      header: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      if (response.success) {
        response.data[0].items.map((item) => {
          http({
            method: "GET",
            url: `${endpoints.getProducts}${item.product}/`,
            header: {
              Authorization: `Bearer ${accessToken}`,
            },
          }).then((productResult) => {
            setCartItems(
              cartItems.concat([
                {
                  ...productResult["data"],
                  qty: item.quantity,
                },
              ])
            );
          });
        });
      } else {
        setErrorMessage({
          header: response.error.header,
          message: response.error.message,
        });
        console.log("errorMessage");
        console.log(errorMessage);
      }
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="mx-4">
        {JSON.stringify(errorMessage) != "{}" ? (
          <div className="my-5">
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <hr />
              {typeof errorMessage.message === "string" ? (
                <p>{errorMessage.message}</p>
              ) : (
                <div>
                  {Object.entries(errorMessage.message).map(([key, value]) => (
                    <div key={key} className="flex">
                      <b>{key}</b>
                      <div className="mx-2"></div>
                      <p>{`${JSON.stringify(value)}`}</p>
                    </div>
                  ))}
                </div>
              )}
            </Alert>
            {errorMessage.message.code == "token_not_valid" && (
              <Link to="/home/Signin" className="btn btn-outline-primary">
                Login
              </Link>
            )}
          </div>
        ) : (
          <div
            className="w-100 my-5 pb-5 flex justify-content-center flex-wrap"
            style={{
              gap: "1.5rem",
              //   maxWidth: 500,
              overflow: "auto",
            }}
          >
            {/* {JSON.stringify(cartItems.length)} */}
            {cartItems &&
              cartItems.length != 0 &&
              cartItems.map((order, index) => (
                <>
                  <div className="rounder mx-3 mt-2 p-4 flex-grow-1">
                    <div className="flex justify-content-between align-items-center shadow border rounder p-3">
                      <div className="flex justify-content-start align-items-center">
                        <div
                          className="rounder"
                          style={{
                            height: "75px",
                            width: "75px",
                            backgroundImage: `url("${order.image}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <div className="m-3"></div>
                        <div>
                          <div className="flex">
                            <b>Name</b>:{" "}
                            <p className="ms-2 text-capitalize">
                              {order.product_name}
                            </p>
                          </div>
                          <div className="flex">
                            <b>Total Price</b>:{" "}
                            <p className="ms-2">
                              {parseFloat(order.price) * parseFloat(order.qty)}
                            </p>
                          </div>
                          <div className="flex">
                            <b>Amount</b>: <p className="ms-2">{order.qty}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="ms-4 btn btn-outline-danger">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
