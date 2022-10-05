import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavBar({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <Navbar bg="white" expand="sm" className="mb-3 shadow">
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
            <div className="flex justify-content-center">
              <Form
                className="flex  flex-grow-1 mx-sm-4 mx-0"
                style={{
                  maxWidth: "500px",
                }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="flex"
                  aria-label="Search"
                  style={{
                    borderStartEndRadius: "0px",
                    borderEndEndRadius: "0px",
                    borderEndStartRadius: "10px",
                    borderStartStartRadius: "10px",
                  }}
                />
                <Button
                  className="m-0 py-3"
                  variant="outline-primary"
                  onClick={() => onSearch(q)}
                  style={{
                    borderStartEndRadius: "10px",
                    borderEndEndRadius: "10px",
                    borderEndStartRadius: "0px",
                    borderStartStartRadius: "0px",
                  }}
                >
                  Search
                </Button>
              </Form>
            </div>
            <Nav className="pe-3 ">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/home/cart">Cart</Nav.Link>
              <Nav.Link href="/home/Signin">
                {localStorage.getItem("accessToken") == "" ? "Logout" : "Login"}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
  
}
