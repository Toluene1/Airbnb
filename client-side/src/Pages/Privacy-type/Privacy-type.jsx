import { useContext, useState } from "react";
import "./Privacy-type.css";
import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import { BsHouseDoor, BsDoorOpen } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";

function PropertyType() {
  const [isDisabled, setisDisabled] = useState(true);
  const { propertyId } = useContext(Context);
  const [privacy, setprivacy] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleToggle = (id) => {
    if (privacy == id) {
      setisDisabled(true);
      return setprivacy("");
    }
    setisDisabled(false);
    setprivacy(id);
  };

  const postPrivacy = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        privacy,
      });
      setloading(false);
      navigate("/become-a-host/location");
    } catch (error) {
      console.log(error);
    }
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
              privacy == "entire-place" ? "privacyTypeClicked" : "privacyType"
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
              privacy == "private-room" ? "privacyTypeClicked" : "privacyType"
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
              privacy == "shared-room" ? "privacyTypeClicked" : "privacyType"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <div className="divText">
              <p className="fw-bold">A Shared room</p>
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

        <button
          disabled={isDisabled}
          className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          onClick={postPrivacy}
        >
          {loading ? (
            <span className="spinner-border text-secondary"></span>
          ) : (
            "Next"
          )}
        </button>
      </footer>
    </main>
  );
}

export default PropertyType;
