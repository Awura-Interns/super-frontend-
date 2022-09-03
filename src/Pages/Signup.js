import React, { useState } from "react";
import "../Assets/styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import http from "../services/http";
import endpoints from "../services/endpoints";
import Alert from "react-bootstrap/Alert";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [termAgreement, setTermAgreement] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  async function handleSubmit() {
    if (termAgreement) {
      var result = await http({
        method: "POST",
        url: endpoints.signUp,
        data: {
          first_name: firstName,
          last_name: lastName,
          password: password,
          confirm_password: confirmPassword,
          email: email,
          phone: phone,
          address: address,
          termAgreement: termAgreement,
        },
      }).then((response) => {
        if (response.success) {
          //TODO: use a better way of verifying response is success
          navigate("/home/Signin");
        } else {
          setErrorMessage({
            header: response.error.header,
            message: response.error.message,
          });
          console.log("errorMessage");
          console.log(errorMessage);
        }
      });
    } else {
      alert("You should agree to the terms and conditions");
    }
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
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="inputfield">
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
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
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="input"
          />
        </div>
        <div className="inputfield">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="inputfield">
          <label>Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="inputfield">
          <label>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="textarea"
          ></textarea>
        </div>

        <div className="inputfield terms">
          <label className="check">
            <input
              onChange={(e) => {
                setTermAgreement(e.target.checked);
                console.log(e);
              }}
              type="checkbox"
              checked={termAgreement}
            />
            <span className="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
        </div>
        <div className="inputfield">
          <input
            type="submit"
            defaultValue="Register"
            className="btn"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
        <p>
          {" "}
          have an account? <Link to="/home/signin">log in</Link>
        </p>
      </div>
    </div>
  );
}
