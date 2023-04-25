import { useEffect, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Amenities.css";
import { AiOutlineWifi } from "react-icons/ai";
import {
  MdOutlineMonitor,
  MdOutlineSoupKitchen,
  MdWork,
  MdPool,
} from "react-icons/md";
import { TbWashTemperature6, TbAirConditioning } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
import { CgGym, CgPiano } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Link } from "react-router-dom";

const Amenities = () => {
  const [amenity, setamenity] = useState({
    wifi: false,
    tv: false,
    kitchen: false,
    washer: false,
    freeparking: false,
    paidparking: false,
    airconditioning: false,
    dedicated: false,
    pool: false,
    piano: false,
    bbqgrill: false,
    gym: false,
    beach: false,
  });
  const [isDisabled, setisDisabled] = useState(true);
  const [Amenities, SetAmenities] = useState([]);

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
    console.log(Amenities);
  }, [Amenities]);

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
            id="dedicated"
            className={`amenity ${amenity.dedicated && "amenityClicked"}`}
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
                <AiOutlineWifi />
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
      </section>
      <br /> <br /> <br /> <br />
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/about-your-place"}>Back</Link>
        </p>

        <Link to={"/become-a-host/privacy-type"} className="text-white">
          <button
            disabled={isDisabled}
            className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          >
            Next
          </button>
        </Link>
      </footer>
    </>
  );
};
export default Amenities;
