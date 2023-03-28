import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import httpClient from "../Services/httpclient";

const OtpVerify = () => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const navigate = useNavigate();
  const submitOtp = useRef({ user_Otp: "" });

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
      <Navbar />
      <div className="m-5">
        <h1>verify Otp</h1>
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
            submit
          </button>
        </form>
        {alert && <p>{alertMessage}</p>}
      </div>
    </div>
  );
};
export default OtpVerify;
