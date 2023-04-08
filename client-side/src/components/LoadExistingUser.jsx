import { useContext, useEffect, useState } from "react";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";
import { CiMail, CiMobile1 } from "react-icons/ci";
const LoadExistingUser = ({ setshowOtp, setexisting, setshowCreateAcc }) => {
  const { existingUser, setexistingUser } = useContext(Context);
  const [loading, setloading] = useState(false);

  let email = JSON.parse(localStorage.getItem("user")).Email;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setexistingUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  //useAnother Account
  function useAnotherAcc() {
    setshowOtp(false);
    setexisting(false);
    setshowCreateAcc(false);
  }

  //continueSameAcc
  function continueSameAcc() {
    setexisting(false);
    setshowOtp(true);
  }

  const postUserEmail = async () => {
    try {
      setloading(true);
      await httpClient.post("/createEmailOtp", { email });
      continueSameAcc();
      setloading(false);
    } catch (error) {
      setloading(false);

      console.log(error);
    }
  };
  return (
    <div>
      <div className="existingImg m-auto">
        <img src={existingUser?.Avatar} alt="" style={{ width: " 100% " }} />
      </div>
      <p className="text-center mt-3  ">
        {" "}
        <span>
          <CiMail />
        </span>{" "}
        <span className="mx-1">{"***" + String(email).slice(4)}</span>
      </p>
      <p className="text-center mt-1">
        {" "}
        <span>
          <CiMobile1 />
        </span>{" "}
        <span className="mx-1">
          {"*****" + String(existingUser.PhoneNumber).slice(-4)}
        </span>
      </p>
      <div className="my-4">
        <button
          className={`w-100 p-2 d-flex justify-content-center  border ${
            loading ? "btn-btn-secondary" : "btn btn-danger "
          }  `}
          onClick={postUserEmail}
        >
          <span
            className={`${loading && "spinner-border p-0 text-secondary"}`}
          ></span>
          <span className={`mx-3 ${loading ? "d-none" : "d-block"}  `}>
            {" "}
            continue
          </span>
        </button>
      </div>
      <p style={{ fontSize: " 0.8rem ", marginTop: "10px" }}>
        We’ll call or text you to confirm your number. Standard message and data
        rates apply
      </p>

      <div className="d-flex justify-content-start my-3">
        <span>not you?</span>
        <span
          className="text-dark mx-3 text-decoration-underline fw-bolder Angle-left"
          onClick={useAnotherAcc}
        >
          Use another account
        </span>
      </div>
    </div>
  );
};
export default LoadExistingUser;
