import { useState, useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";
import {
  handleSaveToken,
  handleSaveUser,
  setLogin,
  UserImg,
} from "../utils/setlocalstorage";

const OtpVerify = ({ setshowCreateAcc, setshowOtp }) => {
  const [user_Otp, setuser_Otp] = useState("");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [disableBtn, setdiasbleBtn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setloading] = useState(false);
  const {
    mail,
    setmail,
    setModalShow,
    setUserImg,
    setLoggedIn,
    setUser,
    setauthloading,
  } = useContext(Context);
  const verify = useRef(null);
  useEffect(() => {
    verify.current.focus();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setmail(JSON.parse(localStorage.getItem("user")).Email);
    }
  }, []);

  useEffect(() => {
    if (user_Otp.length == 6) {
      setdiasbleBtn(true);
    } else {
      setdiasbleBtn(false);
    }
  }, [user_Otp]);

  function backToWelcome() {
    setshowCreateAcc(false);
    setshowOtp(false);
  }

  const postUserOtp = async () => {
    try {
      setloading(true);
      const response = await httpClient.post("/verifyEmailOtp", { user_Otp });
      setalert(true);
      setalertMessage(response.data.message);
      setloading(false);
      if (response.data.message == "proceed to create account") {
        setshowCreateAcc(true);
        return;
      }
      backToWelcome();
      handleSaveToken(response.data.token);
      setModalShow(false);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      setLogin(setLoggedIn);
      UserImg(setUserImg);
      setauthloading(false);
      if (location.pathname == "/") {
        navigate("/");
        return;
      }
      navigate(location.pathname);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
      setloading(false);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    postUserOtp();
  };

  return (
    <div className="animate__animated animate__backInLeft">
      <div className="m-2">
        <p>Enter the code we sent over to {mail} </p>
        <form action="" onSubmit={handleVerifyOtp}>
          <input
            ref={verify}
            required
            type="text"
            className="p-2 otp"
            onChange={(e) => setuser_Otp(e.target.value)}
            maxLength="6"
          />{" "}
          {alert && <p className="text-danger">{alertMessage}</p>}
          <hr className="mt-5" />
          <div className=" w-100 ">
            <button
              type="submit"
              className={`d-flex justify-content-center   ms-auto ${
                disableBtn ? "btn btn-danger" : " btn btn-secondary"
              }    p-2 w-50`}
            >
              <span
                className={`${loading && "spinner-border text-danger"}`}
              ></span>
              <span className="mx-3">continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OtpVerify;
