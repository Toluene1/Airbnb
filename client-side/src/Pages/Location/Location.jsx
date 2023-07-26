import { useContext, useEffect, useMemo, useRef, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Location.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { google_APi_key } from "../AirbnbHome/AirbnbHome";
import { ImLocation } from "react-icons/im";
import { country_code } from "../../utils/CountryCodes";
import { Link, useNavigate } from "react-router-dom";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";

const Location = () => {
  const [long, setlong] = useState(0);
  const [lat, setlat] = useState(0);
  const [showAddress, setshowAddress] = useState(false);
  const [ManualAdd, setManualAdd] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const [loading, setloading] = useState(false);
  const { propertyId, setauthloading, setModalShow, modalShow, authloading } =
    useContext(Context);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const navigate = useNavigate();
  const location = useRef({
    country: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
  });

  function showPosition(position) {
    setlat(position.coords.latitude);
    setlong(position.coords.longitude);
    return;
  }
  //get location
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setlat("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    getLocation();
  }, [long, lat]);
  //auth user

  let isMounted = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await httpAuth.get("/user/fetchUser");
        setauthloading(false);
      } catch (error) {
        setauthloading(true);
        setModalShow(true);
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  //load google location
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: google_APi_key,
  });
  const center = useMemo(() => ({ lat: lat, lng: long }), [lat, long]);

  const handleManual = () => {
    setManualAdd(true);
    setisDisabled(false);
  };

  // submit address to db
  const postLocation = async () => {
    try {
      setloading(true);
      await httpAuth.post(
        `/property/updatepropertylocation/${propertyId}`,
        location.current,
      );
      setloading(false);
      navigate("/become-a-host/floor-plan");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
      setloading(false);
    }
  };
  const closeAlert = () => {
    setalert(false);
  };
  return (
    <>
      <PropertyNav />
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <main>
          {!ManualAdd ? (
            <section className="location">
              <h2 className="my-3">Where's your place located?</h2>
              <p>
                Your address is only shared with guests after they’ve made a
                reservation.
              </p>
              <div className="maps">
                {!isLoaded ? (
                  <div className=" d-flex">
                    <div className="spinner-border text-danger m-auto "></div>
                  </div>
                ) : (
                  <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                  >
                    <Marker position={{ lat: lat, lng: long }} />
                  </GoogleMap>
                )}
                <div className="pointer animate__animated animate__fadeInRight shadow">
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark">
                      <ImLocation />{" "}
                    </p>

                    <input
                      type="search"
                      placeholder="Enter your Address"
                      onFocus={() => setshowAddress(true)}
                    />
                  </div>
                  {showAddress && (
                    <p
                      className="fs-6 fw-bold text-dark mx-4 manual"
                      onClick={handleManual}
                    >
                      Enter your address manually
                    </p>
                  )}
                </div>
              </div>
            </section>
          ) : (
            <section className="location animate__animated animate__fadeInRight ">
              {alert && (
                <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
              )}
              <h2 className="my-3">Confirm your address</h2>
              <p>
                Your address is only shared with guests after they’ve made a
                reservation.
              </p>
              <div className="form-control m-0 p-0 border-0 ">
                {/* country  */}
                <div className="form-floating py-2">
                  <select
                    name=""
                    id="Country/Region"
                    className="form-control p-3"
                    onChange={(e) =>
                      (location.current.country = e.target.value)
                    }
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
                {/* address  */}
                <div className="form-floating  ">
                  <input
                    required
                    id="Address"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) =>
                      (location.current.address = e.target.value)
                    }
                  />
                  <label htmlFor="Address">Address</label>
                </div>
                {/* city  */}
                <div className="form-floating my-2 ">
                  <input
                    required
                    id="city"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => (location.current.city = e.target.value)}
                  />
                  <label htmlFor="city">City / Village</label>
                </div>
                {/* state  */}
                <div className="form-floating my-2 ">
                  <input
                    required
                    id="state"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => (location.current.state = e.target.value)}
                  />
                  <label htmlFor="state">state / province </label>
                </div>
                {/* postal code  */}
                <div className="form-floating my-2 ">
                  <input
                    required
                    id="postal"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) =>
                      (location.current.postal_code = e.target.value)
                    }
                  />
                  <label htmlFor="postal">Postal Code</label>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </section>
          )}
          <footer className="Navfooter">
            <p className="text-decoration-underline fw-bold">
              <Link to={"/become-a-host/privacy-type"}>Back</Link>
            </p>

            <button
              disabled={isDisabled}
              className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
              onClick={postLocation}
            >
              {loading ? (
                <span className="spinner-border text-secondary"></span>
              ) : (
                "Next"
              )}
            </button>
          </footer>
        </main>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Location;
