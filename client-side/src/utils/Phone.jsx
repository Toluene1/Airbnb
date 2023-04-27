import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { country_code } from "./CountryCodes";
import { handleSaveUser } from "./setlocalstorage";

const Phone = ({ seteditphone }) => {
  const edit = useRef({ PhoneNumber: "" });
  const phone = useRef(null);
  const [loading, setloading] = useState(false);
  const { setUser } = useContext(Context);

  // select country and populate to phonenumber input
  function sliceCountry(e) {
    let country = String(e.target.value);
    let foundCountry = country_code.find(
      (country_code) => country_code.name == country,
    );
    phone.current.value = foundCountry.dial_code;
  }

  const postUserEmail = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post("/user/updatePhone", edit.current);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditphone(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhone = (e) => {
    e.preventDefault();
    postUserEmail();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Contact number (for confirmed guests and Airbnb to get in touch). You
        can add other numbers and choose how they’re used
      </span>

      <form onSubmit={updatePhone} className="form-control border-0 p-0 ">
        <div className="form-floating py-2">
          <select
            name=""
            id="Country/Region"
            className="form-control p-3 border"
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
        <div className="form-floating my-2">
          <input
            ref={phone}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.PhoneNumber = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Phone number</label>
        </div>

        <button className="bg-dark text-white border text-decoration-none p-3 rounded my-2">
          {loading ? (
            <span className="spinner-border text-light"></span>
          ) : (
            " Save"
          )}
        </button>
      </form>
    </div>
  );
};
export default Phone;
