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
              <Nav.Link href="/home/Signin" onClick={()=>{
                localStorage.clear();
              }}>
                {localStorage.getItem("accessToken") == "" ? "Login" : "Logout"}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
  // (
  //   <header className="header mx-0 mx-sm-3 mx-lg-5 my-4">
  //     <div className="flex justify-content-between align-items-center">
  //       <div className="">
  //         <h1 className="fw-bold">Super_link</h1>
  //       </div>
  //       <div className="flex flex-grow mx-5 px-5">
  //         <input
  //           type="text"
  //           className="form-control"
  //           placeholder="Search Item"
  //           aria-label="Search Item"
  //           aria-describedby="button-addon2"
  //           style={{
  //             borderStartEndRadius: "0px",
  //             borderEndEndRadius: "0px",
  //             borderEndStartRadius: "10px",
  //             borderStartStartRadius: "10px",
  //           }}
  //         />
  //         <button
  //           className="btn btn-primary py-3 px-4 m-0"
  //           type="button"
  //           id="button-addon2"
  //           style={{
  //             borderStartEndRadius: "10px",
  //             borderEndEndRadius: "10px",
  //             borderEndStartRadius: "0px",
  //             borderStartStartRadius: "0px",
  //           }}
  //         >
  //           <Icon icon="smi:magnify" className="mx-3" fontSize={18}></Icon>
  //         </button>
  //       </div>
  //       <div className="border flex">
  //         <Icon icon="smi:home-outline" className="mx-3" fontSize={18}></Icon>
  //       </div>
  //     </div>
  //     <div className="header-1">
  //       <Link to="/" className="logo">
  //         {" "}
  //         <i className="fas fabook"></i> super_link{" "}
  //       </Link>

  //       <form className="flex items-center">
  //         <label for="simple-search" className="sr-only">
  //           Search
  //         </label>
  //         <div className="relative w-full">
  //           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
  //             <svg
  //               aria-hidden="true"
  //               className="w-5 h-5 text-gray-500 dark:text-gray-400"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
  //                 clip-rule="evenodd"
  //               ></path>
  //             </svg>
  //           </div>
  //           <input
  //             type="text"
  //             id="simple-search"
  //             className="bg-gray-200 -300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="Search"
  //             required=""
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg -700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //             ></path>
  //           </svg>
  //           <span className="sr-only">Search</span>
  //         </button>
  //       </form>

  //       <div className="icons flex items-center gap-10">
  //         <Link to="#">
  //           <Icon icon="bx:home-alt-2" className="headerActionIcon" />
  //         </Link>
  //         <Icon icon="eva:shopping-cart-outline" className="headerActionIcon" />
  //         <Icon
  //           id="login-btnn"
  //           // onClick={div_show}
  //           icon="ant-design:user-outlined"
  //           className="headerActionIcon"
  //         />
  //       </div>
  //     </div>
  //   </header>
  // );
}
