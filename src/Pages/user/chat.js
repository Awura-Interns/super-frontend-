import React from "react";
import NavBar from "../../Components/user/Navbar";

export default function Chat() {
  return (
    <div className="flex flex-column align-items-center">
      <NavBar />

      <div
        className=" rounder m-5 p-5"
        style={{
          maxWidth: 450,
        }}
      >
        <div className="bg-primary p-3 rounder text-white mb-3 fw-bold fs-4">
          Chat with us
        </div>
        {[
          "https://randomuser.me/api/portraits/women/13.jpg",
          "https://randomuser.me/api/portraits/women/39.jpg",
          "https://randomuser.me/api/portraits/women/86.jpg",
        ].map((_) => (
          <div className="border border-secondary rounder p-3 mb-3 flex align-items-center">
            <div
              style={{
                height: "75px",
                width: "75px",
                minWidth: "75px",
                borderRadius: "100%",
                backgroundImage: `url(${_})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="ms-3">
              <div className="fw-bold mb-2">Name User</div>
              <div className="fst-italic">
                optio, eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliqu
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
