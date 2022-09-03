import "../Assets/styles/App.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ItemCard from "../Components/item-card";
import http from "../services/http";
import endpoints from "../services/endpoints";
import { Link } from "react-router-dom";

// import Jumbotron from "react-bootstrap/";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

const Home = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [show_, toggleShow_] = useState(true);

  async function refreshToken() {
    var result = await http({
      method: "POST",
      url: endpoints.refreshToken,
      data: {
        refresh: localStorage.getItem("refreshToken"),
      },
    }).then((response) => {
      if (response.success) {
        //TODO: use a better way of verifying response is success
        localStorage.setItem("accessToken", response.data.access);
      } else {
        setErrorMessage({
          header: response.error.header,
          message: response.error.message,
        });
        console.log("errorMessage");
        console.log(errorMessage);
      }
    });
  }

  useEffect(() => {
    // setErrorMessage({});
    // setItems([]);
    var accessToken = localStorage.getItem("accessToken");
    http({
      method: "GET",
      url: endpoints.getProducts,
      header: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      if (response.success) {
        setItems(response.data);
      } else {
        if (response.error.message.code == "token_not_valid") {
          refreshToken();
        } else {
          setErrorMessage({
            header: response.error.header,
            message: response.error.message,
          });
          console.log("errorMessage");
          console.log(errorMessage);
        }
      }
    });
  }, []);

  // const [data, setdata] = useState([]);

  // console.log("hello");
  // const [truth, settruth] = useState(false);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  // // useEffect(() => {
  // //   console.log("cart change");
  // // }, [cart]);
  // // testFunction();
  // console.log("accessToken");
  // console.log(accessToken);
  return (
    <div className="">
      <Navbar />

      <Container>
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
          </div>
        ) : (
          <div
            className="my-5 pb-5 flex justify-content-center flex-wrap"
            style={{
              gap: "1.5rem",
            }}
          >
            {items.length != 0 &&
              items.map((item, index) => <ItemCard item={item} key={index} />)}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
// 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
