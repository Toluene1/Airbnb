import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../Provider/Context";
import { useContext, useRef } from "react";
import { AiFillApple, AiOutlineMail } from "react-icons/ai";
import httpClient from "../Services/httpclient";
import { country_code } from "../utils/CountryCodes";

function Welcome({ setshowOtp }) {
  const state = useRef({ email: "" });
  const { setmail } = useContext(Context);

  const postUserEmail = async () => {
    try {
      await httpClient.post("/createEmailOtp", state.current);
      setmail(state.current.email);
      setshowOtp(true);
    } catch (error) {
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

        {/* country_code */}
        <div className="form-floating py-2">
          <select name="" id="Country/Region" className="form-control p-3">
            {country_code.map((country) => (
              <option key={country?.name} value="">
                {country?.name} ({country?.dial_code})
              </option>
            ))}
          </select>
          <label htmlFor="Country/Region" className="mx-1">
            Country/Region
          </label>
        </div>

        {/* phone number  */}
        <div className="form-floating  ">
          <input
            id="phone"
            type="text"
            className="form-control p-3"
            placeholder="Phone number"
          />
          <label htmlFor="phone" className="p-2 mx-1">
            Phone Number
          </label>
        </div>
        {/* email  */}

        <div className="form-floating mt-2  ">
          <input
            required
            id="phone"
            type="Email"
            className="form-control p-3"
            placeholder="Email"
            onChange={(e) => (state.current.email = e.target.value)}
          />
          <label htmlFor="Email" className="p-2 mx-1">
            Email
          </label>
        </div>

        <p>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply
        </p>

        <div>
          <button type="submit" className="btn btn-danger w-100 p-2">
            {" "}
            continue
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
