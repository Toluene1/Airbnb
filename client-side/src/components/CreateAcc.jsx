import { useContext, useRef, useState } from "react";

import httpClient from "../Services/httpClient";
import { Context } from "../Provider/Context";
import { useLocation, useNavigate } from "react-router-dom";

const CreateAcc = ({ setshowOtp, setshowCreateAcc }) => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { mail, setModalShow, setLoggedIn, setUserImg, setUser } =
    useContext(Context);

  // fetchuser details
  const fetchUser = async () => {
    try {
      const response = await httpAuth.get("/fetchUser");
      setUser(response.data.user);
      setUserImg(true);
    } catch (error) {
      setUserImg(false);
    }
  };

  function backToWelcome() {
    setshowCreateAcc(false);
    setshowOtp(false);
  }

  //save token to loca storage
  const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
  };
  const navigate = useNavigate();
  const location = useLocation();
  const state = useRef({
    FirstName: "",
    LastName: "",
    Email: mail,
    DOB: "",
    PhoneNumber: "",
  });

  //post user details  to server
  const postUserDetails = async () => {
    try {
      const response = await httpClient.post("/createUser", state.current);
      setalert(true);
      setalertMessage(response.data.message);
      handleSaveToken(response.data.token);
      backToWelcome();
      setUserImg(true);
      setModalShow(false);
      fetchUser();
      setLoggedIn(true);
      if (location.pathname == "/") {
        return navigate("/");
      }
      navigate(location.state.previousUrl);
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
          {alert && <p>{alertMessage}</p>}
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
          {/* password  */}
          <div className="form-floating">
            <input
              id="Phone"
              required
              type="text"
              className="form-control"
              onChange={(e) => (state.current.PhoneNumber = e.target.value)}
              placeholder="Phone Number"
            />
            <label htmlFor="Phone">PhoneNumber</label>
          </div>{" "}
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
