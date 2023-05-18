import { useState, useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";
import {
  handleSaveToken,
  handleSaveUser,
  setLogin,
} from "../utils/setlocalstorage";

const OtpVerify = ({ setshowCreateAcc }) => {
  const [user_Otp, setuser_Otp] = useState("");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [disableBtn, setdiasbleBtn] = useState(false);
  const navigate = useNavigate();
  const Location = useLocation();
  const [loading, setloading] = useState(false);
  const { mail, setModalShow, setLoggedIn, setUser, setauthloading } =
    useContext(Context);
  const verify = useRef(null);
  useEffect(() => {
    verify.current.focus();
  }, []);

  useEffect(() => {
    if (user_Otp.length == 6) {
      setdiasbleBtn(true);
    } else {
      setdiasbleBtn(false);
    }
  }, [user_Otp]);

  const postUserOtp = async () => {
    try {
      setloading(true);
      const response = await httpClient.post("/user/verifyEmailOtp", {
        user_Otp,
      });
      setalert(true);
      setalertMessage(response.data.message);
      setloading(false);
      if (response.data.message == "proceed to create account") {
        setshowCreateAcc(true);
        return;
      }

      handleSaveToken(response.data.token);
      setModalShow(false);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      setLogin(setLoggedIn);

      setauthloading(false);
      if (Location.pathname == "/") {
        navigate("/");
        location.reload();
        return;
      }
      navigate(Location.pathname);
      location.reload();
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
                className={`${loading && "spinner-border text-light"}`}
              ></span>
              <span className={`mx-3 ${loading ? "d-none" : "d-block"}`}>
                continue
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OtpVerify;
