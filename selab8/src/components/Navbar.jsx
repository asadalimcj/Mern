import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./Modal";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  // const email = localStorage.getItem("email"); // Use the correct key name
  const [email, setEmail] = useState(localStorage.getItem("email"));

  return (
    <div className="text-gray-400 bg-black flex items-center justify-center gap-5 py-4">
      <Link className="text-gray-400 no-underline" to="/">
        Counter
      </Link>
      <Link className="text-gray-400 no-underline" to="/api">
        Online Api Data
      </Link>
      <Link className="text-gray-400 no-underline" to="/rent">
        Rent
      </Link>
      {email ? (
        <Link className="text-gray-400 no-underline" to="/product">
          Products
        </Link>
      ) : (
        ""
      )}

      {/* Button to trigger the modal */}
      {email ? (
        <button
          onClick={() => {
            setEmail(localStorage.removeItem("email"));
          }}
          className="text-gray-400 no-underline"
        >
          Welcome, {email}
        </button>
      ) : (
        <button onClick={() => setModalShow(true)}>SignUp</button>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
