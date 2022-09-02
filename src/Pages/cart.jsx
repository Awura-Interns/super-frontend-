import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import http from "../services/http";
import endpoints from "../services/endpoints";
import { Alert, Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const [errorMessage, setErrorMessage] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [_, set_] = useState({});
  const [show, setShow] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState(-1);

  var updateData = () => {
    var accessToken = localStorage.getItem("accessToken");

    http({
      method: "GET",
      url: endpoints.getCartItem,
      header: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setCartItems([]);
      if (response.success) {
        set_(response.data);
        console.log("_____________Response________________");
        console.log(_);
        response.data[0].items.map((item) => {
          http({
            method: "GET",
            url: `${endpoints.getProducts}${item.product}/`,
            header: {
              Authorization: `Bearer ${accessToken}`,
            },
          }).then((productResult) => {
            setCartItems((cartItems) => {
              return cartItems.concat({
                ...productResult["data"],
                qty: item.quantity,
                cartItemId: item.id,
              });
            });
          });
          console.log("____________cartItems_________________");
          console.log(cartItems);
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
  };

  useEffect(() => {
    updateData();
    console.log("i fire once");
  }, []);
  return (
    <>
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
                    {Object.entries(errorMessage.message).map(
                      ([key, value]) => (
                        <div key={key} className="flex">
                          <b>{key}</b>
                          <div className="mx-2"></div>
                          <p>{`${JSON.stringify(value)}`}</p>
                        </div>
                      )
                    )}
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
                              minWidth: "75px",
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
                              <b>Total-Price</b>:{" "}
                              <p className="ms-2">
                                {parseFloat(order.price) *
                                  parseFloat(order.qty)}
                              </p>
                            </div>
                            <div className="flex">
                              <b>Amount</b>: <p className="ms-2">{order.qty}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-column">
                          <button
                            onClick={() => {
                              setShowIndex(index);
                              handleShow();
                            }}
                            className="ms-4 btn btn-outline-success"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => {
                              var accessToken =
                                localStorage.getItem("accessToken");
                              http({
                                method: "DELETE",
                                url: `${cartItems[showIndex].cartItemId
                                  .replace("http", "https")
                                  .replace(":80", "")}`,
                                header: {
                                  Authorization: `Bearer ${accessToken}`,
                                },
                                data: {
                                  product: cartItems[showIndex].id,
                                  quantity:
                                    quantity === -1
                                      ? cartItems[showIndex].qty
                                      : quantity,
                                },
                              })
                                .then((response) => {
                                  updateData();
                                })
                                .catch((error) => {
                                  console.log("error add to cart");
                                  console.log(error);
                                });
                            }}
                            className="ms-4 btn btn-outline-danger"
                          >
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
      {cartItems && cartItems.length > 0 && (
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <p className="fw-bold text-capitalize fs-4">
                {cartItems[showIndex].product_name}
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-column  flex-sm-row  justify-content-center align-items-sm-center align-items-start bg-white p-4 rounder">
              <div
                className="rounder bg-danger"
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundImage: `url("${cartItems[showIndex].image}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="m-3">{JSON.s}</div>
              <div
                style={{
                  width: "300px",
                }}
              >
                <p className="flex align-items-center">
                  <b>Quantity</b>:{" "}
                  <input
                    style={{ width: 50 }}
                    // value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    className="d-inline ms-3 p-1 rounded border border-secondary"
                    type="number"
                  />
                </p>
                <p>
                  <b>Type</b>: {cartItems[showIndex].product_type}
                </p>
                <p>
                  <b>Amount</b>: {cartItems[showIndex].amount}
                </p>
                <p>
                  <b>Price</b>: {cartItems[showIndex].price}
                </p>
                <p className="text-danger">
                  <b>Discount</b>: -{cartItems[showIndex].discount}
                </p>
                <p>{cartItems[showIndex].description}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                var accessToken = localStorage.getItem("accessToken");
                http({
                  method: "PATCH",
                  url: `${cartItems[showIndex].cartItemId
                    .replace("http", "https")
                    .replace(":80", "")}`,
                  header: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                  data: {
                    product: cartItems[showIndex].id,
                    quantity:
                      quantity === -1 ? cartItems[showIndex].qty : quantity,
                  },
                })
                  .then((response) => {
                    updateData();
                  })
                  .catch((error) => {
                    console.log("error add to cart");
                    console.log(error);
                  });
                handleClose();
              }}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

var asdf = {
  id: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart/2/",
  pk: 2,
  user: "http://dev.api.superlink.awuraplc.org:80/api/accounts/account/20/",
  order_date: "2022-08-31T14:29:58.028919Z",
  delivery_man: null,
  closed: false,
  payed: false,
  closed_time: null,
  delivery: false,
  items: [
    {
      id: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart-item/4/",
      pk: 4,
      cart: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart/2/",
      product: 20,
      quantity: 3,
      unit_price: "600.00",
      discount: "5.00",
    },
    {
      id: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart-item/5/",
      pk: 5,
      cart: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart/2/",
      product: 21,
      quantity: 1,
      unit_price: "600.00",
      discount: "5.00",
    },
    {
      id: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart-item/6/",
      pk: 6,
      cart: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart/2/",
      product: 23,
      quantity: 4,
      unit_price: "600.00",
      discount: "5.00",
    },
    {
      id: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart-item/7/",
      pk: 7,
      cart: "http://dev.api.superlink.awuraplc.org:80/api/orders/cart/2/",
      product: 22,
      quantity: 1,
      unit_price: "600.00",
      discount: "5.00",
    },
  ],
};
