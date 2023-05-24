import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../Provider/Context";
import { useContext, useRef, useState } from "react";
import { AiFillApple, AiOutlineMail } from "react-icons/ai";
import httpClient from "../Services/httpclient";

function Welcome({ setshowOtp }) {
  const state = useRef({ email: "" });
  const { setmail } = useContext(Context);
  const [loading, setloading] = useState(false);

  const postUserEmail = async () => {
    try {
      setloading(true);
      await httpClient.post("/user/createEmailOtp", state.current);
      setmail(state.current.email);
      setshowOtp(true);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.current.email) {
      postUserEmail();
    }
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit} className="form-control border-0">
        <h4 className="my-2">Welcome to AirBnb</h4>
        {/* email  */}

        <div className="form-floating  ">
          <input
            required
            id="Email"
            type="Email"
            className="form-control "
            placeholder="Email"
            onChange={(e) => (state.current.email = e.target.value)}
          />
          <label htmlFor="Email">Email</label>
        </div>

        <p className="mt-1">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply
        </p>

        <div>
          <button
            type="submit"
            className={`w-100 p-2 d-flex justify-content-center border ${
              loading ? "btn btn-secondary bg-light " : "btn btn-danger "
            }  `}
          >
            <span
              className={`${loading && "spinner-border text-secondary"}`}
            ></span>
            <span className={`mx-3 ${loading ? "d-none" : "d-block"}`}>
              {" "}
              continue
            </span>
          </button>
        </div>

        <div className="w-100 d-flex align-items-center mt-1">
          <div className="underline"></div>
          <span className="mx-1"> or</span>
          <div className="underline"></div>
        </div>
      </form>

      {/* register with social media  */}
      <div className="butn-cont">
        {/* facebook */}
        <div className="m-2">
          <button className=" w-100 p-2 d-flex align-items-center">
            <span className="text-primary fs-5 ms-3">
              <FaFacebookSquare />{" "}
            </span>{" "}
            <span className="m-auto"> continue with facebook</span>
          </button>
        </div>{" "}
        {/* Google  */}
        <div className="m-2">
          <button className=" w-100 p-2 d-flex align-items-center">
            <span className=" fs-5 ms-3">
              <FcGoogle />{" "}
            </span>{" "}
            <span className="m-auto"> continue with Google</span>
          </button>
        </div>
        {/* Apple  */}
        <div className="m-2">
          <button className=" w-100 p-2 d-flex align-items-center">
            <span className=" fs-5 ms-3">
              <AiFillApple />
            </span>{" "}
            <span className="m-auto"> continue with Apple</span>
          </button>
        </div>
        {/* mail */}
        <div className="m-2">
          <button className=" w-100 p-2 d-flex align-items-center">
            <span className=" fs-5 ms-3">
              <AiOutlineMail />
            </span>{" "}
            <span className="m-auto"> continue with email</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Welcome;
