import Modal from "react-bootstrap/Modal";
import React, { useContext, useState } from "react";

import OtpVerify from "./OtpVerify";
import Welcome from "./Welcome.jsx";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CreateAcc from "./CreateAcc";
import { Context } from "../Provider/Context";
import LoadExistingUser from "./LoadExistingUser";

function PopModal(props) {
  const [showOtp, setshowOtp] = useState(false);
  const [showCreateAcc, setshowCreateAcc] = useState(false);
  const { setModalShow, existing, setexisting, existingUser } =
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
      className="animate__animated animate__backInUp"
    >
      <Modal.Header className="d-flex align-items-center">
        {existing ? (
          <AiOutlineClose
            className="fs-6 Angle-left"
            onClick={() => setModalShow(false)}
          />
        ) : (
          <div>
            {showCreateAcc ? (
              <FaAngleLeft
                onClick={backToVerifyOtp}
                className="Angle-left fs-6"
              />
            ) : (
              <div>
                {showOtp ? (
                  <FaAngleLeft
                    onClick={() => setshowOtp(false)}
                    className="Angle-left fs-6 fw-normal"
                  />
                ) : (
                  <AiOutlineClose
                    className="fs-6 Angle-left"
                    onClick={() => setModalShow(false)}
                  />
                )}
              </div>
            )}
          </div>
        )}
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=" fs-6 m-auto"
        >
          {existing ? (
            <div>
              <span className="fs-6 fw-bold">
                {" "}
                Welcome back {existingUser.FirstName}
              </span>
            </div>
          ) : (
            <div>
              {showCreateAcc ? (
                <div>
                  <span className="fs-6"> Finish Signing up</span>
                </div>
              ) : (
                <div>
                  {showOtp ? (
                    <div>
                      <span className="fs-6"> confirm your email</span>
                    </div>
                  ) : (
                    <p className="mt-3 fs-6 ">login or Signup</p>
                  )}
                </div>
              )}
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        {existing ? (
          <LoadExistingUser
            setshowOtp={setshowOtp}
            setexisting={setexisting}
            setshowCreateAcc={setshowCreateAcc}
          />
        ) : (
          <div>
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
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default PopModal;
