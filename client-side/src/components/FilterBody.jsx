import { MdOutlineWarehouse } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingHospital } from "react-icons/tb";
import { BsHouses } from "react-icons/bs";
import httpClient from "../Services/httpclient";
import { Context } from "../Provider/Context";

function FilterBody({ hideFilter }) {
  const [bedrooms, setbedrooms] = useState({ color: 0, qty: "" });
  const [bed, setbed] = useState({ color: 0, qty: "" });
  const [bathroom, setbathroom] = useState({ color: 0, qty: "" });
  const [structure, setstructure] = useState("");
  const [privacy, setprivacy] = useState("");
  const [amenities, setamenities] = useState([]);
  const [loading, setloading] = useState(false);
  const [filterProp, setFilterProp] = useState([]);
  const { setProperty } = useContext(Context);

  const [amenity, setamenity] = useState({
    wifi: false,
    tv: false,
    kitchen: false,
    washer: false,
    airconditioning: false,
    pool: false,
    piano: false,
  });

  let isMounted = true;
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

  // Clear All
  const handleClearAll = () => {
    setamenity({
      wifi: false,
      tv: false,
      kitchen: false,
      washer: false,
      airconditioning: false,
      pool: false,
      piano: false,
    });
    setamenities([]);
    setprivacy("");
    setstructure("");
    setbathroom({ ...bathroom, color: 0, qty: "" });
    setbedrooms({ ...bedrooms, color: 0, qty: "" });
    setbed({ ...bed, color: 0, qty: "" });
  };

  // filter Amenities
  const handleToggleAmenities = (e) => {
    setamenity({
      ...amenity,
      [e.currentTarget.id]: !amenity[e.currentTarget.id],
    });

    if (!amenity[e.currentTarget.id]) {
      setamenities([...amenities, e.currentTarget.id]);
    } else {
      setamenities([
        ...amenities.filter((amenity) => amenity !== e.currentTarget.id),
      ]);
    }
  };

  //filter by bedrooms
  const handleColor = (row) => {
    if (row == 0) {
      return setbedrooms({ ...bedrooms, color: row, qty: "" });
    }
    setbedrooms({ ...bedrooms, color: row, qty: row });
  };

  //filter by Beds
  const handleColorBed = (row) => {
    if (row == 0) {
      return setbed({ ...bed, color: row, qty: "" });
    }
    setbed({ ...bed, color: row, qty: row });
  };

  //filter by bathroom
  const handleColorBath = (row) => {
    if (row == 0) {
      return setbathroom({ ...bathroom, color: row, qty: "" });
    }
    setbathroom({ ...bathroom, color: row, qty: row });
  };

  //Filter by Structure
  const handleStructureFilter = (e) => {
    if (structure == e.currentTarget.id) {
      setstructure("");
      return;
    }
    setstructure(e.currentTarget.id);
  };

  const handlePrivacyFilter = (e) => {
    if (privacy == e.currentTarget.id) {
      setprivacy("");
      return;
    }
    setprivacy(e.currentTarget.id);
  };
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setloading(true);
        const response = await httpClient.get(
          `property/getallproperty/?structure=${structure}&Bedrooms=${bedrooms.qty}&Beds=${bed.qty}&Bathrooms=${bathroom.qty}&privacy=${privacy}&Amenities=${amenities}`
        );
        setFilterProp(response.data.prop);
        setloading(false);
      } catch (error) {
        setFilterProp([]);
        setloading(true);
        console.log(error.response.data.msg);
      }
    };
    if (isMounted) {
      fetchProperties();
    }
    return () => {
      isMounted = false;
    };
  }, [structure, bedrooms.qty, bed.qty, bathroom.qty, privacy, amenities]);
  const handleSubmitFilter = () => {
    setProperty(filterProp);
    hideFilter();
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

      <section>
        <hr />
        <div className="mt-3 pb-2">
          <span className="fw-bold">Type of place</span>
          <ul className="list-group mt-2 ul">
            <li>
              <label
                className="form-check-label labelStyle"
                htmlFor="entire-place"
              >
                Entire place <br /> A place to yourself
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 accent addStyle"
                  type="checkbox"
                  value=""
                  id="entire-place"
                  checked={privacy == "entire-place" ? true : false}
                  onChange={handlePrivacyFilter}
                />
              </span>
            </li>
            <li className="mt-3">
              <label className=" accent  labelStyle" htmlFor="private-room">
                Private room <br /> Your own room in a home or a hotel, plus
                some shared common spaces
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="private-room"
                  checked={privacy == "private-room" ? true : false}
                  onChange={handlePrivacyFilter}
                />
              </span>
            </li>
            <li className="mt-3">
              <label className=" accent  labelStyle" htmlFor="shared-room">
                shared room <br /> A sleeping space and common areas that may be
                shared with others
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="shared-room"
                  checked={privacy == "shared-room" ? true : false}
                  onChange={handlePrivacyFilter}
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
                backgroundColor: index === bedrooms.color ? "black" : "",
                color: index === bedrooms.color ? "white" : "",
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
                backgroundColor: index === bed.color ? "black" : "",
                color: index === bed.color ? "white" : "",
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
                backgroundColor: index === bathroom.color ? "black" : "",
                color: index === bathroom.color ? "white" : "",
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
            id="House"
            className={`propertyType ms-2 ${
              structure == "House" && "colorBorder"
            }`}
            onClick={handleStructureFilter}
          >
            <span>
              <MdOutlineWarehouse className="iconProp" />
            </span>
            <div className="divWithinProp">House</div>
          </span>
          <div
            id="Apartments"
            className={`propertyType ms-2 ${
              structure == "Apartments" && "colorBorder"
            }`}
            onClick={handleStructureFilter}
          >
            <span>
              <BsBuildings className="iconProp" />
            </span>{" "}
            <p className="divWithinProp">Apartments</p>
          </div>
        </div>
        <div className="divPropType mt-3">
          <div
            id="Caves"
            className={`propertyType ms-2 ${
              structure == "Caves" && "colorBorder"
            }`}
            onClick={handleStructureFilter}
          >
            <span>
              <TbBuildingHospital className="iconProp" />
            </span>
            <p className="divWithinProp">Caves</p>
          </div>
          <div
            className={`propertyType ms-2 ${
              structure == "Tower" && "colorBorder"
            }`}
            onClick={handleStructureFilter}
            id="Tower"
          >
            <span>
              <BsHouses className="iconProp" />
            </span>
            <p className="divWithinProp">Tower</p>
          </div>
        </div>
      </section>
      <hr className="mt-5" />

      {/* Amenties  */}
      <section>
        <p className="fw-bold">Amenities</p>
        <p className="fw-bold">Essentials</p>
        <div className="mt-3 pb-2">
          <ul className="list-group mt-2 ul">
            <li>
              <label htmlFor="wifi" className="accent">
                wifi
              </label>
              <span>
                <input
                  className=" me-1 float-end accent addStyle"
                  type="checkbox"
                  value=""
                  id="wifi"
                  checked={amenity.wifi == true ? true : false}
                  onChange={handleToggleAmenities}
                />
              </span>
            </li>
            <li className="mt-3">
              <label className=" accent" htmlFor="kitchen">
                kitchen
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="kitchen"
                  onChange={handleToggleAmenities}
                  checked={amenity.kitchen == true ? true : false}
                />
              </span>
            </li>
            <li className="mt-3">
              <label htmlFor="washer" className=" accent">
                washer
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="washer"
                  onChange={handleToggleAmenities}
                  checked={amenity.washer == true ? true : false}
                />
              </span>
            </li>
            <li className="mt-3">
              <label htmlFor="airconditioning" className=" accent">
                Air Conditioning
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="airconditioning"
                  onChange={handleToggleAmenities}
                  checked={amenity.airconditioning == true ? true : false}
                />
              </span>
            </li>
            <li className="mt-3">
              <label className=" accent" htmlFor="pool">
                Pool
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="pool"
                  onChange={handleToggleAmenities}
                  checked={amenity.pool == true ? true : false}
                />
              </span>
            </li>
            <li className="mt-3">
              <label className=" accent" htmlFor="tv">
                TV
              </label>
              <span>
                <input
                  className=" me-1 float-end mt-2 addStyle accent"
                  type="checkbox"
                  value=""
                  id="tv"
                  onChange={handleToggleAmenities}
                  checked={amenity.tv == true ? true : false}
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
        </div>
        <hr />
        <section className="divFilterFooter ">
          <button
            className="text-dark clearAll  border-0 bg-white"
            onClick={handleClearAll}
          >
            clear all
          </button>
          <div>
            <button onClick={handleSubmitFilter} className="footerButton">
              {loading ? (
                <span className="spinner-border text-secondary "></span>
              ) : (
                <span>Show {filterProp.length} stays</span>
              )}
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default FilterBody;
