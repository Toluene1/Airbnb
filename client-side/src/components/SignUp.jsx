import Modal from "react-bootstrap/Modal";
import React, { useContext, useState } from "react";

import OtpVerify from "./OtpVerify";
import Welcome from "./Welcome.jsx";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CreateAcc from "./CreateAcc";
import { Context } from "../Provider/Context";

function PopModal(props) {
  const [showOtp, setshowOtp] = useState(false);
  const [showCreateAcc, setshowCreateAcc] = useState(false);
  const { setModalShow } = useContext(Context);
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
      <Modal.Header className="d-flex align-items-center">
        {showCreateAcc ? (
          <FaAngleLeft onClick={backToVerifyOtp} className="Angle-left fs-4" />
        ) : (
          <div>
            {showOtp ? (
              <FaAngleLeft
                onClick={() => setshowOtp(false)}
                className="Angle-left fs-4 fw-normal"
              />
            ) : (
              <AiOutlineClose
                className="fs-4 Angle-left"
                onClick={() => setModalShow(false)}
              />
            )}
          </div>
        )}
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=" fs-6 m-auto"
        >
          {showCreateAcc ? (
            <div>
              <span> Finish Signing up</span>
            </div>
          ) : (
            <div>
              {showOtp ? (
                <div>
                  <span> confirm your email</span>
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
