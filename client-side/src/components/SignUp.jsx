import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

import OtpVerify from "./OtpVerify";
import Welcome from "./Welcome.jsx";
import { FaAngleLeft } from "react-icons/fa";
import CreateAcc from "./CreateAcc";

function PopModal(props) {
  const [showOtp, setshowOtp] = useState(false);
  const [showCreateAcc, setshowCreateAcc] = useState(false);

  function backToVerifyOtp() {
    setshowCreateAcc(false);
    setshowOtp(true);
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="animate__animated animate__backInUp"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className=" fs-6  ">
          {showCreateAcc ? (
            <div>
              <FaAngleLeft onClick={backToVerifyOtp} className="Angle-left" />{" "}
              <span className="ms-5"> Finish Signing up</span>
            </div>
          ) : (
            <div>
              {showOtp ? (
                <div>
                  <FaAngleLeft
                    onClick={() => setshowOtp(false)}
                    className="Angle-left"
                  />{" "}
                  <span className="ms-5"> confirm your email</span>
                </div>
              ) : (
                <p className="mt-3 ">login or SignUp</p>
              )}
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        {showCreateAcc ? (
          <CreateAcc
            setshowOtp={setshowOtp}
            setshowCreateAcc={setshowCreateAcc}
          />
        ) : (
          <div>
            {showOtp ? (
              <OtpVerify
                setshowCreateAcc={setshowCreateAcc}
                setshowOtp={setshowOtp}
              />
            ) : (
              <Welcome setshowOtp={setshowOtp} />
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default PopModal;
