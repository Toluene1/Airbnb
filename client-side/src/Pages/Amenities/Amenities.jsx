import { useContext, useEffect, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Amenities.css";
import { AiOutlineWifi } from "react-icons/ai";
import { GrAnchor } from "react-icons/gr";

import {
  MdOutlineMonitor,
  MdOutlineSoupKitchen,
  MdWork,
  MdPool,
  MdOutdoorGrill,
  MdCameraAlt,
} from "react-icons/md";
import { TbWashTemperature6, TbAirConditioning } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
import { CgGym, CgPiano } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";

const Amenities = () => {
  const [amenity, setamenity] = useState({
    wifi: false,
    tv: false,
    kitchen: false,
    washer: false,
    freeparking: false,
    paidparking: false,
    airconditioning: false,
    dedicated_workspace: false,
    pool: false,
    piano: false,
    bbqgrill: false,
    gym: false,
    beach: false,
    camera: false,
    Weapons: false,
  });
  const [isDisabled, setisDisabled] = useState(true);
  const [Amenities, SetAmenities] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { propertyId } = useContext(Context);
  const handleToggle = (id) => {
    setamenity({ ...amenity, [id]: !amenity[id] });

    if (!amenity[id]) {
      SetAmenities([...Amenities, id]);
    } else {
      SetAmenities([...Amenities.filter((Amenity) => Amenity !== id)]);
    }
  };
  useEffect(() => {
    if (Amenities.length >= 1) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [Amenities]);

  const postAmenities = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        Amenities,
      });
      setloading(false);
      navigate("/become-a-host/photos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PropertyNav />
      <section className="Amenities   animate__animated animate__fadeInUp ">
        <h3>Tell guests what your place has to offer</h3>
        <p className="my-3 publish">
          You can add more amenities after you publish your listing.
        </p>
        <main>
          <div
            className={` ${amenity.wifi ? "amenityClicked" : "amenity"}`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p>
              <AiOutlineWifi />
            </p>
            <p className="fs-6 mt-3">wifi</p>
          </div>
          <div
            className={`amenity ${amenity.tv && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p>
              <MdOutlineMonitor />
            </p>
            <p className="fs-6 mt-3">tv</p>
          </div>
          <div
            className={`amenity ${amenity.kitchen && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p>
              <MdOutlineSoupKitchen />
            </p>
            <p className="fs-6 mt-3">kitchen</p>
          </div>{" "}
          <div
            className={`amenity ${amenity.washer && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p>
              <TbWashTemperature6 />
            </p>
            <p className="fs-6 mt-3">washer</p>
          </div>{" "}
          <div
            id="freeparking"
            className={`amenity ${amenity.freeparking && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p>
              <AiFillCar />
            </p>
            <p className="fs-6">free parking on premises</p>
          </div>{" "}
          <div
            id="paidparking"
            className={`amenity ${amenity.paidparking && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p>
              <AiFillCar />
            </p>
            <p className="fs-6">paid parking on premises</p>
          </div>{" "}
          <div
            id="airconditioning"
            className={`amenity ${amenity.airconditioning && "amenityClicked"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <TbAirConditioning />
            </p>
            <p className="fs-6 mt-3">air conditioning</p>
          </div>{" "}
          <div
            id="dedicated_workspace"
            className={`amenity ${
              amenity.dedicated_workspace && "amenityClicked"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p>
              <MdWork />
            </p>
            <p className="fs-6 mt-3">dedicated workspace</p>
          </div>
        </main>

        {/* // social amenities  */}
        <div className="my-3">
          <h6 className="my-2">Do you have any standout amenities?</h6>
          <main>
            <div
              className={` ${amenity.pool ? "amenityClicked" : "amenity"}`}
              onClick={(e) =>
                handleToggle(e.currentTarget.children[1].innerHTML)
              }
            >
              <p>
                <MdPool />
              </p>
              <p className="fs-6 mt-3">pool</p>
            </div>{" "}
            <div
              id="bbqgrill"
              className={` ${amenity.bbqgrill ? "amenityClicked" : "amenity"}`}
              onClick={(e) => handleToggle(e.currentTarget.id)}
            >
              <p>
                <MdOutdoorGrill />
              </p>
              <p className="fs-6 mt-3">BBQ grill</p>
            </div>{" "}
            <div
              className={` ${amenity.piano ? "amenityClicked" : "amenity"}`}
              onClick={(e) =>
                handleToggle(e.currentTarget.children[1].innerHTML)
              }
            >
              <p>
                <CgPiano />
              </p>
              <p className="fs-6 mt-3">piano</p>
            </div>{" "}
            <div
              className={` ${amenity.gym ? "amenityClicked" : "amenity"}`}
              onClick={(e) =>
                handleToggle(e.currentTarget.children[1].innerHTML)
              }
            >
              <p>
                <CgGym />
              </p>
              <p className="fs-6 mt-3">gym</p>
            </div>
            <div
              id="beach"
              className={` ${amenity.beach ? "amenityClicked" : "amenity"}`}
              onClick={(e) => handleToggle(e.currentTarget.id)}
            >
              <p>
                <FaUmbrellaBeach />
              </p>
              <p className="fs-6 mt-3">BeachAccess</p>
            </div>
          </main>
        </div>
        <div>
          <h6 className="my-2">Does your place have any of these?</h6>
          <main>
            <div
              id="camera"
              className={` ${amenity.camera ? "amenityClicked" : "amenity"}`}
              onClick={(e) => handleToggle(e.currentTarget.id)}
            >
              <p>
                <MdCameraAlt />
              </p>
              <p className="fs-6 mt-3">Security camera(s) </p>
            </div>
            <div
              id="Weapons"
              className={` ${amenity.Weapons ? "amenityClicked" : "amenity"}`}
              onClick={(e) => handleToggle(e.currentTarget.id)}
            >
              <p>
                <GrAnchor />
              </p>
              <p className="fs-6 mt-3">Weapons</p>
            </div>
          </main>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/stand-out"}>Back</Link>
        </p>

        <button
          disabled={isDisabled}
          className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          onClick={postAmenities}
        >
          {loading ? (
            <span className="spinner-border text-secondary"></span>
          ) : (
            "Next"
          )}
        </button>
      </footer>
    </>
  );
};
export default Amenities;
