import { useContext, useRef, useState } from "react";
import httpClient from "../Services/httpclient";
import { Context } from "../Provider/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { country_code } from "../utils/CountryCodes";
import {
  handleSaveToken,
  handleSaveUser,
  setLogin,
} from "../utils/setlocalstorage";

const CreateAcc = ({ setshowOtp, setshowCreateAcc }) => {
  const { mail, setModalShow, setLoggedIn, setUser, setauthloading } =
    useContext(Context);

  const navigate = useNavigate();
  const Location = useLocation();
  const state = useRef({
    FirstName: "",
    LastName: "",
    Email: mail,
    DOB: "",
    PhoneNumber: "",
  });
  const phone = useRef(null);

  // select country and populate to phonenumber input
  function sliceCountry(e) {
    let country = String(e.target.value);
    let foundCountry = country_code.find(
      (country_code) => country_code.name == country,
    );
    phone.current.value = foundCountry.dial_code;
  }

  //back to welcome page before logout
  function backToWelcome() {
    setshowCreateAcc(false);
    setshowOtp(false);
  }

  //post user details  to server
  const postUserDetails = async () => {
    try {
      const response = await httpClient.post("/user/createUser", state.current);
      handleSaveToken(response.data.token);
      setUser(response.data.user);
      backToWelcome();
      setModalShow(false);
      setLogin(setLoggedIn);
      handleSaveUser(response.data.user);
      setauthloading(false);
      if (Location.pathname == "/") {
        navigate("/");
        return location.reload();
      }
      navigate(Location.pathname);
      location.reload();
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUserDetails();
  };

  return (
    <>
      <div className=" animate__animated animate__backInLeft">
        <form
          action=""
          className={` border-0  form-control  `}
          onSubmit={handleSubmit}
        >
          {/* First NAme  */}
          <div className="form-floating ">
            <input
              required
              id="firstname"
              type="text"
              className="form-control  "
              onChange={(e) => (state.current.FirstName = e.target.value)}
              placeholder="FirstName"
            />
            <label htmlFor="firstname">First Name</label>
          </div>
          {/* LastName  */}
          <div className="form-floating">
            <input
              id="lastname"
              required
              type="text"
              className="form-control"
              onChange={(e) => (state.current.LastName = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
          <p>Make sure it matches the name on your government ID.</p>
          <br />
          {/* DOB */}
          <div className="form-floating">
            <input
              id="dob"
              required
              type="date"
              className="form-control"
              onChange={(e) => (state.current.DOB = e.target.value)}
              placeholder="Birthdate"
            />
            <label htmlFor="Birthdate">Birthdate</label>
          </div>{" "}
          <p>
            To sign up, you need to be at least 18. Your birthday won’t be
            shared with other people who use Airbnb.
          </p>
          {/* country_code */}
          <div className="form-floating py-2">
            <select
              name=""
              id="Country/Region"
              className="form-control p-3"
              onChange={sliceCountry}
            >
              {country_code.map((country) => (
                <option key={country?.name} value={country?.name}>
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
              ref={phone}
              id="phone"
              type="text"
              className="form-control p-3"
              placeholder="Phone number"
              onChange={(e) => (state.current.PhoneNumber = e.target.value)}
            />
            <label htmlFor="phone" className="p-2 mx-1">
              Phone Number
            </label>
          </div>
          <p>We'll email you trip confirmations and receipts.</p>
          <p>
            {" "}
            By selecting Agree and continue, I agree to Airbnb’s Terms of
            Service, Payments Terms of Service, and Nondiscrimination Policy and
            acknowledge the Privacy Policy.
          </p>
          <br />
          <div className="w-100">
            <button
              type="submit"
              className="p-3 rounded registerbtn w-100 btn btn-danger"
            >
              Agree and Continue
            </button>
            <hr />

            <p>
              Airbnb will send you members-only deals, inspiration, marketing
              emails, and push notifications. You can opt out of receiving these
              at any time in your account settings or directly from the
              marketing notification.
            </p>
            <div>
              <input type="checkbox" className="fs-6" name="" id="check" />
              <label htmlFor="check" className="fs-6 mx-1">
                I don’t want to receive marketing messages from Airbnb
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateAcc;
