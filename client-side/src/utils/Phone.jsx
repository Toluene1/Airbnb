import { useRef } from "react";
import { country_code } from "./CountryCodes";

const Phone = () => {
  const edit = useRef({ PhoneNumber: "" });
  const phone = useRef(null);

  // select country and populate to phonenumber input
  function sliceCountry(e) {
    let country = String(e.target.value);
    let foundCountry = country_code.find(
      (country_code) => country_code.name == country,
    );
    phone.current.value = foundCountry.dial_code;
  }
  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Contact number (for confirmed guests and Airbnb to get in touch). You
        can add other numbers and choose how they’re used
      </span>

      <form action="" className="form-control border-0 p-0 ">
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
            value={edit.current.FirstName}
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
          Save
        </button>
      </form>
    </div>
  );
};
export default Phone;
