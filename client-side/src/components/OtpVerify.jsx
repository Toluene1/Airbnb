import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import httpClient from "../Services/httpclient";

const OtpVerify = ({ setshowCreateAcc, setshowOtp }) => {
  const [user_Otp, setuser_Otp] = useState("");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [disableBtn, setdiasbleBtn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setloading] = useState(false);
  const { mail, setModalShow, setUserImg, setUser, setLoggedIn } =
    useContext(Context);

  //navigate to weolcome page after auth
  function backToWelcome() {
    setshowCreateAcc(false);
    setshowOtp(false);
  }

  //save token

  const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
  };

  const fetchUser = async () => {
    try {
      const response = await httpAuth.get("/fetchUser");
      setUser(response.data.user);
      setUserImg(true);
    } catch (error) {
      setUserImg(false);
    }
  };

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
      const response = await httpClient.post("/verifyEmailOtp", { user_Otp });
      setalert(true);
      setalertMessage(response.data.message);
      setloading(false);
      if (response.data.message == "proceed to create account") {
        setshowCreateAcc(true);
        return;
      }
      backToWelcome();
      setUserImg(true);
      handleSaveToken(response.data.token);
      setModalShow(false);
      fetchUser();
      setLoggedIn(true);
      if (location.pathname == "/") {
        navigate("/");
        return;
      }
      navigate(location.state.previousUrl);
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
        <p>Enter the code we sent over to your {mail} </p>
        <form action="" onSubmit={handleVerifyOtp}>
          <input
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
