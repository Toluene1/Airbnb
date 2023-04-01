import { useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";

const OtpVerify = () => {
  const navigate = useNavigate();
  const submitOtp = useRef({ user_Otp: "" });
  const location = useLocation();
  const { mail } = useContext(Context);
  //save token
  const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
  };

  const postUserOtp = async () => {
    try {
      const response = await httpClient.post(
        "/verifyEmailOtp",
        submitOtp.current,
      );
      setalert(true);
      setalertMessage(response.data.message);
      if (response.data.message == "proceed to create account") {
        navigate("/register");
        return;
      }
      handleSaveToken(response.data.token);
      navigate(location.state.previousUrl);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (submitOtp.current.user_Otp) {
      postUserOtp();
    }
  };

  return (
    <div>
      <div className="m-5">
        <h1>Enter the code we sent over to your {mail} </h1>
        <form action="" onSubmit={handleVerifyOtp}>
          <input
            required
            type="text"
            className="p-2"
            onChange={(e) => (submitOtp.current.user_Otp = e.target.value)}
          />{" "}
          <br /> <br />
          <button type="submit" className="btn btn-primary mx-4 p-2 w-25">
            {" "}
            continue
          </button>
        </form>
      </div>
    </div>
  );
};
export default OtpVerify;
