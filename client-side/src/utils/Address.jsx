import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { country_code } from "./CountryCodes";
import { handleSaveUser } from "./setlocalstorage";

const Address = ({ seteditaddress }) => {
  const [loading, setloading] = useState(false);
  const { setUser } = useContext(Context);
  const editAddress = useRef({
    country: "",
    state: "",
    suite: "",
    zipcode: "",
    city: "",
    street: "",
  });

  const postUserAddress = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post(
        "/user/createAddress",
        editAddress.current,
      );
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditaddress(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = (e) => {
    e.preventDefault();
    postUserAddress();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Use a permanent address where you can receive mail.
      </span>
      <form onSubmit={updateAddress} className="form-control border-0 p-0 ">
        <div className="form-floating py-2">
          <select
            name=""
            id="Country/Region"
            className="form-control p-3 border w-50"
            onChange={(e) => (editAddress.current.country = e.target.value)}
          >
            {country_code.map((country) => (
              <option key={country?.name} value={country?.name}>
                {country?.name}
              </option>
            ))}
          </select>
          <label htmlFor="Country/Region" className="mx-1">
            Country/Region
          </label>
        </div>
        {/* street  */}
        <div className="form-floating my-2">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editAddress.current.street = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Street</label>
        </div>
        {/* suite */}
        <div className="form-floating my-3">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editAddress.current.suite = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Apt,Suite.(optional)</label>
        </div>

        <main className="d-flex p-0 border-0 w-100 ">
          <div className="form-floating ">
            <input
              id="lastname"
              required
              type="text"
              className="form-control w-100 border "
              onChange={(e) => (editAddress.current.city = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">City</label>
          </div>{" "}
          <div className="form-floating  mx-4  ">
            <input
              id="lastname"
              required
              type="text"
              className="form-control w-100 border "
              onChange={(e) => (editAddress.current.state = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">State/Province/County</label>
          </div>
        </main>
        <div className="form-floating my-2  ">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-25 border "
            onChange={(e) => (editAddress.current.zipcode = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Zipcode</label>
        </div>

        <button
          type="submit"
          className="bg-dark text-white border text-decoration-none p-3 rounded my-2"
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
export default Address;
