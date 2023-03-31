import Button from "react-bootstrap/Button";
import PopModal from "../components/SignUp";
import React, { useState } from "react";
function DisplayModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        Sign Up
      </Button>{" "}
      <Button variant="light" onClick={() => setModalShow(true)}>
        Login
      </Button>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default DisplayModal;
