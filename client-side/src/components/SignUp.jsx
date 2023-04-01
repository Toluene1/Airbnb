import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpVerify from "../Pages/OtpVerify";
import Welcome from "./Welcome.jsx";
function PopModal(props) {
  const [showOtp, setshowOtp] = useState(false);

  const navigate = useNavigate();

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="fs-6 ms-auto py-0  "
        >
          Login or Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        {showOtp ? <OtpVerify /> : <Welcome setshowOtp={setshowOtp} />}
      </Modal.Body>
    </Modal>
  );
}

export default PopModal;
