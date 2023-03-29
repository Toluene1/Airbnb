import { useContext, useRef, useState } from "react";

import httpClient from "../Services/httpClient";
import { Context } from "../Provider/Context";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { mail } = useContext(Context);

  const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
  };

  const state = useRef({
    FirstName: "",
    LastName: "",
    Email: mail,
    DOB: "",
    PhoneNumber: "",
  });
  console.log(state.current.Email);
  const postUserDetails = async () => {
    try {
      const response = await httpClient.post("/createUser", state.current);
      setalert(true);
      setalertMessage(response.data.message);
      handleSaveToken(response.data.token);
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
      <Navbar />
      <div className="mt-3   ">
        <form
          action=""
          className={` border-0  form-control  p-3`}
          style={{ width: "300px" }}
          onSubmit={handleSubmit}
        >
          {alert && <p>{alertMessage}</p>}
          {/* First NAme  */}
          <div>
            <label htmlFor="firstname">First Name</label> <br />
            <input
              required
              type="text"
              className="form-control "
              onChange={(e) => (state.current.FirstName = e.target.value)}
            />
          </div>
          <br />
          {/* LastName  */}
          <div>
            <label htmlFor="lastname">Last Name</label> <br />
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => (state.current.LastName = e.target.value)}
            />
          </div>
          <br />
          {/* DOB */}
          <div>
            <label htmlFor="email">DOB</label> <br />
            <input
              required
              type="date"
              className="form-control"
              onChange={(e) => (state.current.DOB = e.target.value)}
            />
          </div>{" "}
          <br />
          {/* password  */}
          <div>
            <label htmlFor="password">PhoneNumber</label> <br />
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => (state.current.PhoneNumber = e.target.value)}
            />
          </div>{" "}
          <br />
          <div className="text-center">
            <button type="submit" className="p-2 rounded registerbtn">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
