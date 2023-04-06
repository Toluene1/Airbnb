import { useRef } from "react";
import { country_code } from "./CountryCodes";

const Address = () => {
  const edit = useRef({ Email: "" });
  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Use a permanent address where you can receive mail.
      </span>
      <form action="" className="form-control border-0 p-0 ">
        <div className="form-floating py-2">
          <select
            name=""
            id="Country/Region"
            className="form-control p-3 border w-50"
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
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Street</label>
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
          <label htmlFor="lastname">Apt,Suite.(optional)</label>
        </div>

        <main className="d-flex p-0 border-0 w-100 ">
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
            <label htmlFor="lastname">City</label>
          </div>{" "}
          <div className="form-floating  mx-4  ">
            <input
              value={edit.current.FirstName}
              id="lastname"
              required
              type="text"
              className="form-control w-100 border "
              onChange={(e) => (edit.current.Email = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">State/Province/County</label>
          </div>
        </main>
        <div className="form-floating my-2  ">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-25 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Zipcode</label>
        </div>

        <button className="bg-dark text-white border text-decoration-none p-3 rounded my-2">
          Save
        </button>
      </form>
    </div>
  );
};
export default Address;
