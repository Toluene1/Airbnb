import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpclient";

const Login = () => {
  const state = useRef({ email: "" });
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const { setmail, mail } = useContext(Context);

  const navigate = useNavigate();
  const postUserEmail = async () => {
    try {
      const response = await httpClient.post("/createEmailOtp", state.current);
      setalert(true);
      setalertMessage(response.data.message);
      setmail(state.current.email);
      navigate("/verifyOtp");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.current.email) {
      postUserEmail();
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center">login page</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          className="m-3 p-2"
          type="Email"
          onChange={(e) => (state.current.email = e.target.value)}
        />
        <button type="submit" className="btn btn-primary ">
          continue
        </button>
      </form>
      {alert && <p>{alertMessage}</p>}
    </div>
  );
};
export default Login;
