import { useRef, useState, useContext } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { country_code } from "./CountryCodes";
import { Language } from "./Languages";
import { handleSaveUser } from "./setlocalstorage";

const EmergencyContact = ({ seteditcontact }) => {
  const edit = useRef({ Email: "" });
  const [loading, setloading] = useState(false);
  const { setUser } = useContext(Context);
  const editContact = useRef({
    name: "",
    relationship: "",
    email: "",
    phonenumber: "",
    language: "",
  });
  const phone = useRef(null);

  // select country and populate to phonenumber input
  function sliceCountry(e) {
    let country = String(e.target.value);
    let foundCountry = country_code.find(
      (country_code) => country_code.name == country,
    );
    phone.current.value = foundCountry.dial_code;
  }

  const postUserAddress = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post(
        "/emergContact",
        editContact.current,
      );
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditcontact(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = (e) => {
    e.preventDefault();
    postUserAddress();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        A trusted contact we can alert in an urgent situation.
      </span>
      <form
        action=""
        onSubmit={updateContact}
        className="form-control border-0 p-0 "
      >
        {/* name  */}
        <div className="form-floating my-2">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editContact.current.name = e.target.value)}
            placeholder="Name"
          />
          <label htmlFor="lastname">Name</label>
        </div>
        {/* relationship */}
        <div className="form-floating my-3">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) =>
              (editContact.current.relationship = e.target.value)
            }
            placeholder="relationship"
          />
          <label htmlFor="lastname">Relationship </label>
        </div>
        {/* prefferedlanguage */}
        <div className="form-floating py-2">
          <select
            name=""
            id="Country/Region"
            className="form-control p-3 border"
            onChange={(e) => (editContact.current.language = e.target.value)}
          >
            {Language.map((lang, index) => (
              <option key={index} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>
          <label htmlFor="Country/Region" className="mx-1">
            Preffered Language
          </label>
        </div>
        {/* email  */}
        <div className="form-floating ">
          <input
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editContact.current.email = e.target.value)}
            placeholder="email"
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
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (editContact.current.phonenumber = e.target.value)}
            placeholder="phone"
          />
          <label htmlFor="lastname">Phone number</label>
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
export default EmergencyContact;
