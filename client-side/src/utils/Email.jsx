import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { handleSaveUser } from "./setlocalstorage";

const Email = ({ seteditmail }) => {
  const [loading, setloading] = useState(false);
  const { setUser } = useContext(Context);
  const editEmail = useRef({
    Email: "",
  });

  const postUserEmail = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post(
        "/user/updateUser",
        editEmail.current,
      );
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditmail(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmail = (e) => {
    e.preventDefault();
    postUserEmail();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Use an address you’ll always have access to
      </span>
      <form onSubmit={updateEmail} className="form-control border-0 p-0 ">
        <div className="form-floating my-2">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editEmail.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Email address</label>
        </div>

        <button
          type="submit"
          className="bg-dark text-white border text-decoration-none p-3 rounded my-2"
        >
          {loading ? <span className="spinner-border"></span> : "Save"}
        </button>
      </form>
    </div>
  );
};
export default Email;
