import { useState } from "react";
import "./Privacy-type.css";
import { Link } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import { BsHouseDoor, BsDoorOpen } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";

function PropertyType() {
  const [selected, setselected] = useState(null);
  const [isDisabled, setisDisabled] = useState(true);
  const [privacy, setprivacy] = useState("");
  const handleToggle = (id) => {
    if (selected == id) {
      return setselected(null);
    }
    setisDisabled(false);
    setselected(id);
    setprivacy(id);
  };

  return (
    <main>
      <PropertyNav />
      <section className=" mt-4 mainPage">
        <h1 className="text-center mb-5">
          What type of place will guests have?
        </h1>
        <main className="animate__animated animate__fadeInRight">
          <div
            id="entire-place"
            value="entire-place"
            className={` ${
              selected == "entire-place" ? "privacyTypeClicked" : "privacyType"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <div className="divText">
              <p className="fw-bold">An entire place</p>
              <p style={{ marginTop: "-10px" }} className="fw-light">
                Guests have the whole place to themselves.
              </p>
            </div>
            <div className="divIcon">
              <BsHouseDoor style={{ fontSize: "37px" }} />
            </div>
          </div>
          <div
            id="private-room"
            className={` ${
              selected == "private-room" ? "privacyTypeClicked" : "privacyType"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <div className="divText">
              <p className="fw-bold">A private room</p>
              <p style={{ marginTop: "-10px" }} className="fw-light">
                Guests sleep in a private room but some areas may be shared with
                others
              </p>
            </div>
            <div className="divIcon">
              <BsDoorOpen style={{ fontSize: "37px" }} />
            </div>
          </div>
          <div
            id="shared-room"
            className={` ${
              selected == "shared-room" ? "privacyTypeClicked" : "privacyType"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <div className="divText">
              <p className="fw-bold">An entire place</p>
              <p style={{ marginTop: "-10px" }}>
                Guests sleep in a room or common areas that may be shared with
                others
              </p>
            </div>
            <div className="divIcon">
              <MdOutlineOtherHouses style={{ fontSize: "37px" }} />
            </div>
          </div>
        </main>
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/structure"}>Back</Link>
        </p>
        <Link to={"/become-a-host/location"} className="text-white">
          <button
            disabled={isDisabled}
            className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          >
            Next
          </button>
        </Link>
      </footer>
    </main>
  );
}

export default PropertyType;
