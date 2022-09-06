import React from "react";
import "../../Assets/user/styles/landingpage.css";


import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function landingpage() {
  return (
    <main>
      <header className="header shadow mb-5">
        <Navbar bg="white" expand="sm">
          <Container fluid className=" flex justify-content-between">
            <Navbar.Brand href="/" className="">
              <span className="fs-3">Super_link</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
              className="align-item-end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  <span className="fs-3">Super_link</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="flex flex-column flex-sm-row flex-grow-1 justify-content-sm-end justify-content-start align-items-sm-center align-items-start">
                <Nav className="pe-3 ">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/home/cart">Cart</Nav.Link>
                  <Nav.Link href="/home/Signin">
                    {localStorage.getItem("accessToken") == ""
                      ? "Login"
                      : "Logout"}
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Cart"
                    drop="start"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="#action3">
                      List Cart Items
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      See Cart History
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <div className="bg-">
        <div
          className="rounder m-4 flex justify-content-start align-items-center"
          style={{
            height: "500px",
            backgroundImage: `url("https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="rounder shadow px-5 mx-3 py-5"
            style={{
              backgroundColor: "#00000090",
              color: "white",
              maxWidth: 700,
            }}
          >
            <div className="display-1">
              If you love it, Buy it before someone else does{" "}
              <span className="fw-bold">! ;)</span>
            </div>
            <div className="my-4 fs-4">Best products in the market</div>
            <div className="flex align-items-end">
              <Link to="/home" className="btn btn-outline-light p-3">
                See available items
              </Link>
              <Link
                to="/home/chat"
                className="ms-3 fw-normal text-white alert-link"
              >
                Chat with us
              </Link>
            </div>
          </div>
        </div>
        <div className="my-5 py-5 px-4 ">
          <div className="shadow p-4 rounder border">
            <span>
              <h3 className="">Info</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
