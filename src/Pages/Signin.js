import React, { useState } from "react";
import "../Assets/styles/signin.css";
import { Link, useNavigate } from "react-router-dom";
import http from "../services/http";
import endpoints from "../services/endpoints";
import Alert from "react-bootstrap/Alert";

export default function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("aaa@gmail.com");
  const [password, setPassword] = useState("asdfzxcv1234");
  const [errorMessage, setErrorMessage] = useState({});

  async function handleSubmit() {
    var result = await http({
      method: "POST",
      url: endpoints.signIn,
      data: {
        password: password,
        email: email,
      },
    }).then((response) => {
      if (response.success) {
        //TODO: use a better way of verifying response is success
        localStorage.setItem("accessToken", response.data.access);
        navigate("/home");
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

  return (
    <div className="wrapper">
      <div className="title">Registration Form</div>
      {JSON.stringify(errorMessage) != "{}" && (
        <Alert className="my-5" variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <hr />
          {typeof errorMessage.message === "string" ? (
            <p>{errorMessage.message}</p>
          ) : (
            <div>
              {Object.entries(errorMessage.message).map(([key, value]) => (
                <div className="flex">
                  <b>{key}</b>
                  <div className="mx-2"></div>
                  <p>{`${JSON.stringify(value)}`}</p>
                </div>
              ))}
            </div>
          )}
        </Alert>
      )}
      <div className="form">
        <div className="inputfield">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input"
          />
        </div>
        <div className="inputfield">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input"
          />
        </div>
        <div className="inputfield">
          <input
            type="submit"
            defaultValue="Register"
            onClick={() => {
              handleSubmit();
            }}
            className="btn"
          />
        </div>
        <p>
          don't have an account? <Link to="/home/Signup">register now</Link>
        </p>
      </div>
    </div>
  );
}
