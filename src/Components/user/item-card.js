import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import http from "../../Helpers/user/http";
import endpoints from "../../Helpers/user/endpoints";

import SingleItemCard from "./singleCartCard";
import { useState } from "react";

export default function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-white px-5 py-3 border shadow-sm rounder">
        <p className="text-2xl text-capitalize">{item.product_name}</p>
        <div
          className="rounder"
          style={{
            height: "150px",
            width: "150px",
            backgroundImage: `url("${item.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex justify-content-between">
          <button onClick={handleShow} to={`/products/` + item.id}>
            See More
          </button>
          <div>
            <div className="text-danger">
              <span className="text-decoration-line-through">
                {parseFloat(item.discount) + parseFloat(item.price)}
              </span>
              <span>{"  ETB"}</span>
            </div>
            <div>
              {parseFloat(item.price)}
              {"  ETB"}
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fw-bold text-capitalize fs-4">{item.product_name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-column  flex-sm-row  justify-content-center align-items-sm-center align-items-start bg-white p-4 rounder">
            <div
              className="rounder bg-danger"
              style={{
                height: "250px",
                width: "100%",
                backgroundImage: `url("${item.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="m-3"></div>
            <div
              style={{
                width: "300px",
              }}
            >
              <p className="flex align-items-center">
                <b>Quantity</b>:{" "}
                <input
                  style={{ width: 50 }}
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="d-inline ms-3 p-1 rounded border border-secondary"
                  type="number"
                />
              </p>
              <p>
                <b>Type</b>: {item.product_type}
              </p>
              <p>
                <b>Amount</b>: {item.amount}
              </p>
              <p>
                <b>Price</b>: {item.price}
              </p>
              <p className="text-danger">
                <b>Discount</b>: -{item.discount}
              </p>
              <p>{item.description}</p>
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
              console.log(accessToken);
              console.log("accessToken");
              console.log(item);
              console.log("product");
              http({
                method: "POST",
                url: endpoints.addToCart,
                header: {
                  Authorization: `Bearer ${accessToken}`,
                },
                data: {
                  product: item.id,
                  quantity: quantity,
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
                });
              handleClose();
            }}
          >
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
