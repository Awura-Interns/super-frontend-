import "../../Assets/user/styles/App.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/user/Navbar";
import ItemCard from "../../Components/user/item-card";
import http from "../../Helpers/user/http";
import endpoints from "../../Helpers/user/endpoints";
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
  return (
    <div className="" style={{marginBottom:"10.7rem"}}>
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
                // <div>
                //   {Object.entries(errorMessage.message).map(([key, value]) => (
                //     <div key={key} className="flex">
                //       <b>{key}</b>
                //       <div className="mx-2"></div>
                //       <p>{`${JSON.stringify(value)}`}</p>
                //       <p>{JSON.stringify(value)? "please login or regester first" : "sorry"}</p>
                //     </div>
                //   ))}
                // </div>
                <div>
               <div className="mx-2"></div>
                
                  <p>please login or regester first</p>
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

