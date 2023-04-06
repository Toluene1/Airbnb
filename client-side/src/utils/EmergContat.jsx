import { useRef } from "react";
import { country_code } from "./CountryCodes";

const EmergencyContact = () => {
  const edit = useRef({ Email: "" });

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
        A trusted contact we can alert in an urgent situation.
      </span>
      <form action="" className="form-control border-0 p-0 ">
        {/* street  */}
        <div className="form-floating my-2">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Name</label>
        </div>
        {/* suite */}
        <div className="form-floating my-3">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Relationship </label>
        </div>
        {/* email  */}
        <div className="form-floating ">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Email</label>
        </div>{" "}
        {/* phone  */}
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
            Country code
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
export default EmergencyContact;
