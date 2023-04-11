import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { handleSaveUser } from "./setlocalstorage";

const EditName = ({ seteditname }) => {
  const edit = useRef({ FirstName: "", LastName: "" });
  const [loading, setloading] = useState(false);
  const { setUser, User } = useContext(Context);
  const [firstname, setFirstName] = useState(User.FirstName);
  const [lastname, setlastname] = useState(User.LastName);

  const FirstName = (e) => {
    setFirstName(e.target.value);
    edit.current.FirstName = e.target.value;
  };
  const LastName = (e) => {
    setlastname(e.target.value);
    edit.current.LastName = e.target.value;
  };
  const postUserEmail = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post("/updateName", edit.current);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditname(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNames = (e) => {
    e.preventDefault();
    postUserEmail();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        This is the name on your travel document, which could be a license or a
        passport.
      </span>
      <form onSubmit={updateNames} className="form-control border-0 p-0">
        <main className="d-flex justify-content-start border-0  ">
          <div className="form-floating">
            <input
              value={firstname}
              id="lastname"
              required
              type="text"
              className="form-control border "
              onChange={FirstName}
              placeholder="FirstName"
            />
            <label htmlFor="lastname">First Name</label>
          </div>

          <div className="form-floating mx-4  ">
            <input
              value={lastname}
              id="lastname"
              required
              type="text"
              className="form-control border"
              onChange={LastName}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </main>
        <button
          type="submit"
          className="bg-dark text-white border text-decoration-none p-3 rounded"
        >
          {loading ? (
            <span className="spinner-border text-light"></span>
          ) : (
            "Save"
          )}
        </button>
      </form>
    </div>
  );
};
export default EditName;
