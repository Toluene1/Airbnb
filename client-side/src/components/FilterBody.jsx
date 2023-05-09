import { MdOutlineWarehouse } from "react-icons/md";
import React, { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingHospital } from "react-icons/tb";
import { BsHouses } from "react-icons/bs";

function FilterBody(props) {
  const [selected, setSelected] = useState(0);
  const [bed, setbed] = useState(0);
  const [property, setProperty] = useState(false);
  const [property2, setProperty2] = useState(false);
  const [property3, setProperty3] = useState(false);
  const [property4, setProperty4] = useState(false);
  const [bathroom, setbathroom] = useState(0);

  const lists = [
    { title: "any" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8+" },
  ];
  const handleColor = (row) => {
    setSelected(row);
  };
  const handleColorBed = (row) => {
    setbed(row);
  };
  const handleColorBath = (row) => {
    setbathroom(row);
  };

  //properties house,apartment function
  const ChangePropertyDiv = () => {
    setProperty(!property);
  };
  const ChangePropertyDiv2 = () => {
    setProperty2(!property2);
  };
  const ChangePropertyDiv3 = () => {
    setProperty3(!property3);
  };
  const ChangePropertyDiv4 = () => {
    setProperty4(!property4);
  };

  return (
    <section>
      <div className="topModal">
        <p className="fw-bold">price change</p>
        <p className="fw-lighter">The average nightly price is $472</p>
      </div>
      <div>
        <img
          src="https://journals.sagepub.com/cms/10.1177/2041669520987254/asset/images/large/10.1177_2041669520987254-fig9.jpeg"
          alt=""
          className="imgGraph"
        />
      </div>
      <div className="text-center mt-2">
        <input type="text" className=" p-2 inputPrice" placeholder="min" />
        <span className="ms-2 me-2">-</span>
        <input type="text" className="inputPrice p-2" placeholder="max" />
      </div>
      <form>
        <section>
          <hr />
          <div className="mt-3 pb-2">
            <span className="fw-bold">Type of place</span>
            <ul className="list-group mt-2 ul">
              <li>
                <label
                  className="form-check-label labelStyle"
                  htmlFor="firstCheckbox"
                >
                  Entire place <br /> A place to yourself
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 accent addStyle"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent  labelStyle" htmlFor="secondCheckbox">
                  Private room <br /> Your own room in a home or a hotel, plus
                  some shared common spaces
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent  labelStyle" htmlFor="secondCheckbox">
                  shared room <br /> A sleeping space and common areas that may
                  be shared with others
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                </span>
              </li>
            </ul>
            <hr />
          </div>
        </section>
        <section>
          <p className="fw-bold">Room and Beds</p>
          <p className="fw-bold">Bedrooms</p>
          <div className="divBed">
            {lists.map((list, index) => (
              <button
                type="button"
                className="bedButtonRest"
                key={index}
                onClick={() => handleColor(index)}
                style={{
                  backgroundColor: index === selected ? "black" : "",
                  color: index === selected ? "white" : "",
                }}
              >
                {list.title}
              </button>
            ))}
          </div>
          <p className="fw-bold mt-3">Beds</p>
          <div className="divBed">
            {lists.map((list, index) => (
              <button
                type="button"
                className="bedButtonRest"
                key={index}
                onClick={() => handleColorBed(index)}
                style={{
                  backgroundColor: index === bed ? "black" : "",
                  color: index === bed ? "white" : "",
                }}
              >
                {list.title}
              </button>
            ))}
          </div>
          <p className="fw-bold mt-3">Bathrooms</p>
          <div className="divBed">
            {lists.map((list, index) => (
              <button
                type="button"
                className="bedButtonRest"
                key={index}
                onClick={() => handleColorBath(index)}
                style={{
                  backgroundColor: index === bathroom ? "black" : "",
                  color: index === bathroom ? "white" : "",
                }}
              >
                {list.title}
              </button>
            ))}
          </div>
          <hr className="mt-4" />
        </section>
        <section>
          <p className="fw-bold ">Property type</p>
          <div className="divPropType">
            <span
              className={`propertyType ms-2 ${property && "colorBorder"}`}
              onClick={ChangePropertyDiv}
            >
              <span>
                <MdOutlineWarehouse className="iconProp" />
              </span>
              <div className="divWithinProp">house</div>
            </span>
            <span
              className={`propertyType ms-2 ${property2 && "colorBorder"}`}
              onClick={ChangePropertyDiv2}
            >
              <span>
                <BsBuildings className="iconProp" />
              </span>
              <div className="divWithinProp">Apartment</div>
            </span>
          </div>
          <div className="divPropType mt-3">
            <span
              className={`propertyType ms-2 ${property3 && colorBorder}`}
              onClick={ChangePropertyDiv3}
            >
              <span>
                <TbBuildingHospital className="iconProp" />
              </span>
              <div className="divWithinProp">Guesthouse</div>
            </span>
            <span
              className={`propertyType ms-2 ${property4 && "colorBorder"}`}
              onClick={ChangePropertyDiv4}
            >
              <span>
                <BsHouses className="iconProp" />
              </span>
              <div className="divWithinProp">Hotel</div>
            </span>
          </div>
        </section>
        <hr className="mt-5" />
        <section>
          <p className="fw-bold">Amenities</p>
          <p className="fw-bold">Essentials</p>
          <div className="mt-3 pb-2">
            <ul className="list-group mt-2 ul">
              <li>
                <label htmlFor="Checkbox1" className="form-check-label">
                  wifi
                </label>
                <span>
                  <input
                    className=" me-1 float-end accent addStyle"
                    type="checkbox"
                    value=""
                    id="Checkbox1"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox2">
                  kitchen
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Checkbox2"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label htmlFor="Checkbox3" className=" accent">
                  washer
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Checkbox3"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label htmlFor="Checkbox4" className=" accent">
                  Air Conditioning
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Checkbox4"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox5">
                  Heating
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Checkbox5"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox6">
                  TV
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Checkbox6"
                  />
                </span>
              </li>
            </ul>
            <hr />
          </div>
        </section>
        <section>
          <p className="fw-bold">Host Language</p>
          <div className="mt-3 pb-2">
            <ul className="list-group mt-2 ul">
              <li>
                <label className="form-check-label" htmlFor="Language1">
                  English
                </label>
                <span>
                  <input
                    className=" me-1 float-end accent addStyle"
                    type="checkbox"
                    value=""
                    id="Language1"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Lamguage2">
                  French
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Language2"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Language3">
                  German
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Language3"
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Language4">
                  Spanish
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value=""
                    id="Language4"
                  />
                </span>
              </li>
            </ul>
            <hr />
          </div>
          <section className="divFilterFooter ">
            <div>
              <a href="#" className="text-dark clearAll">
                clear all
              </a>
            </div>
            <div>
              <button
                onClick={props.onHide}
                type="submit"
                className="footerButton"
              >
                Show *** stays
              </button>
            </div>
          </section>
        </section>
      </form>
    </section>
  );
}

export default FilterBody;
