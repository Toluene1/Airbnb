import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";

const OtpVerify = () => {
  const [user_Otp, setuser_Otp] = useState("");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [disableBtn, setdiasbleBtn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mail, setModalShow, setshowCreateAcc, setshowOtp } =
    useContext(Context);

  function backToWelcome() {
    setshowCreateAcc(false);
    setshowOtp(false);
  }

  //save token

  const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
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
      const response = await httpClient.post("/verifyEmailOtp", { user_Otp });
      setalert(true);
      setalertMessage(response.data.message);
      if (response.data.message == "proceed to create account") {
        setshowCreateAcc(true);
        return;
      }
      handleSaveToken(response.data.token);
      backToWelcome();
      setModalShow(false);
      if (location.pathname == "/") {
        return navigate("/");
      }
      navigate(location.state.previousUrl);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    postUserOtp();
  };

  return (
    <div>
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
          <div className="text-end">
            <button
              type="submit"
              className={` ${
                disableBtn ? "btn btn-danger" : " btn btn-secondary"
              }    p-2 w-25`}
            >
              {" "}
              continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OtpVerify;
