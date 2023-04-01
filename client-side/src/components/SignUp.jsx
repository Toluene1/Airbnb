import Modal from "react-bootstrap/Modal";
import React, { useContext, useState } from "react";

import OtpVerify from "./OtpVerify";
import Welcome from "./Welcome.jsx";
import { FaAngleLeft } from "react-icons/fa";
import CreateAcc from "./CreateAcc";
import { Context } from "../Provider/Context";

function PopModal(props) {
  const { showOtp, setshowOtp, showCreateAcc, setshowCreateAcc } =
    useContext(Context);

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
          <CreateAcc />
        ) : (
          <div>
            {showOtp ? <OtpVerify /> : <Welcome setshowOtp={setshowOtp} />}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default PopModal;
