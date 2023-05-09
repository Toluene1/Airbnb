import { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import httpClient from "../../Services/httpclient";
import "./Property.css";
import { FaAngleLeft } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import Airbnblogo from "../../assets/airbnb-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Context } from "../../Provider/Context";
import { TbWorld } from "react-icons/tb";
import {
  FaBars,
  FaStar,
  FaBed,
  FaShower,
  FaHouseUser,
  FaAngleDown,
} from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import {
  BsBalloon,
  BsFillBagCheckFill,
  BsFillBagHeartFill,
} from "react-icons/bs";
import UserPics from "../../../src/assets/User.jpg";
import httpAuth from "../../Services/config";
import PopModal from "../../components/SignUp";
import FooterProp from "../../components/FooterProp.jsx/FooterProp";

const Property = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [property, setproperty] = useState({});
  const [loading, setloading] = useState(true);
  const [sticky, setSticky] = useState(false);
  const { User, Loggedin, setUser, modalShow, setModalShow } =
    useContext(Context);
  const { id } = useParams();
  const [drop, setdrop] = useState(false);
  let isMounted = true;

  function HideDropdown() {
    setModalShow(true);
    setDropdown(false);
  }
  const handleStick = () => {
    if (window.scrollY > 720) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    location.reload();
    Existing(setexisting);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleStick);

    return () => {
      window.removeEventListener("scroll", handleStick);
    };
  }, [window.scrollY]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpAuth.get("/user/fetchUser");
        setUser(response.data.user);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const FetchProperty = async () => {
      try {
        setloading(true);
        const response = await httpClient.get(`property/property/${id}`);
        setproperty(response.data.prop);
        setloading(false);
      } catch (error) {
        setproperty({});
        setloading(true);

        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      FetchProperty();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <nav className="WEB">
        {/* web  */}
        <main className="propertyiweb">
          <div className="mx-5 ">
            <Link to={"/"} className="text-decoration-none">
              <img src={Airbnblogo} alt="" className="imageDiv1" />
            </Link>
          </div>

          <div>
            <button className="search">
              <span className="fs-6 fw-bold"> start your search</span>
              <span>
                <AiOutlineSearch className="searchbtn" />
              </span>
            </button>
          </div>

          <div className="navDiv3 ">
            {Loggedin ? (
              <div>
                <Link
                  to={"/become-a-host"}
                  className="text-decoration-none text-dark fw-normal"
                >
                  {" "}
                  Switch to hosting
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to={"/AirbnbHome"}
                  className="text-decoration-none text-dark"
                >
                  {" "}
                  Airbnb your home
                </Link>
              </div>
            )}

            {/* world icon  */}
            <div>
              <TbWorld className="tbIcon" />
            </div>
            {/* bars */}
            <div>
              <button
                className="userButton "
                onClick={() => setDropdown(!dropdown)}
              >
                <div>
                  <FaBars />
                </div>

                {/* display user Image */}

                <div className="user-img">
                  <img
                    src={User?.Avatar || UserPics}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </button>
            </div>
            {dropdown && (
              <div
                ref={dropdownRef}
                className="dropdown shadow px-0 text-start"
              >
                {Loggedin ? (
                  <div>
                    <Link className="fw-bold  text-black">
                      {" "}
                      <p> Messages</p>
                    </Link>
                    <Link>
                      {" "}
                      <p> Trips</p>
                    </Link>
                    <Link>
                      {" "}
                      <p> Wishlist</p>
                    </Link>
                    <hr />
                    <Link>
                      {" "}
                      <p> Manage listings</p>
                    </Link>
                    <p>
                      {" "}
                      <Link>Manage experiences</Link>
                    </p>
                    <Link to={"/Accounts"}>
                      {" "}
                      <p> Account</p>
                    </Link>
                    <hr />
                    <Link>
                      {" "}
                      <p> Help</p>
                    </Link>
                    <button
                      className="border-0 bg-white mx-2 p-0"
                      onClick={handleLogOut}
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div>
                    <p onClick={HideDropdown} className="fw-bold text-dark ">
                      {" "}
                      Login{" "}
                    </p>{" "}
                    <p onClick={HideDropdown}>Sign Up</p>
                    <hr />
                    <Link>
                      {" "}
                      <p>Airbnb your home</p>
                    </Link>
                    <Link>
                      {" "}
                      <p> Host an experience </p>
                    </Link>
                    <Link>
                      {" "}
                      <p>Help</p>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </nav>
      {/* mobile */}
      <nav className=" propertyi ">
        <div className="d-flex  justify-content-between align-items-center ">
          <Link to={"/"}>
            <p className="fs-5 mt-1">
              {" "}
              <FaAngleLeft />
            </p>
          </Link>
          <h6 className="mx-3">Homes </h6>
        </div>

        <div className="d-flex justify-content-between  align-items-center">
          <p>
            <FiShare />
          </p>
          <p className="mx-4">
            {" "}
            <GiSelfLove />{" "}
          </p>
        </div>
      </nav>

      {/* stick nav  */}
      {sticky && (
        <nav
          className={`stickyNavbar ${
            sticky && " animate__animated animate__fadeInDown"
          }`}
        >
          <main>
            <a href="#photos">
              {" "}
              <p>Photos</p>
            </a>
            <a href="#amenities">
              <p> Amenities</p>
            </a>
            <p>Reviews</p>
          </main>
        </nav>
      )}
      {loading ? (
        <div className="center-screen">
          <span className="spinner-border text-danger"></span>
        </div>
      ) : (
        <>
          <section id="photos" className="propmain">
            <h3 className="mt-4">{property?.About}</h3>
            <div className="d-flex juistify-content-center align-items-center">
              <span>
                <FaStar />
              </span>
              <span className="mx-2">{property.review || 4.98}</span>
              <span className="mx-4">
                superhost . {property?.Location?.city}{" "}
                {property?.Location?.country}
              </span>
            </div>
            {/* images  */}
            <div className="d-flex flex-wrap gap-2  mt-3">
              {property.images.map((images, index) => (
                <div className="imagesprop " key={index}>
                  <img src={images} alt="" />
                </div>
              ))}
            </div>
            {/* bedroom and beds  */}
            <main className="owner">
              <div className="user mt-2">
                <header className="d-flex justify-content-between align-items-baseline">
                  <h5>
                    {property.structure} in a villa hosted by{" "}
                    {property.host.FirstName}
                  </h5>
                  <div className="img">
                    <img
                      src={property.host.Avatar}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </header>
                <main className="main">
                  <div className="feature">
                    <p>
                      <FaBed className="fs-5 ms-1" />
                    </p>
                    <p className="mx-4">
                      <h6 className="m-0">{property.Bedrooms}bedrooms</h6>
                      <h6 className="m-0">{property.Beds}beds</h6>
                    </p>
                  </div>
                  <div className="feature">
                    <p>
                      <FaShower className="fs-5 ms-1" />
                    </p>
                    <p className="mx-4">
                      <h6>private bathroom</h6>
                    </p>
                  </div>
                  <div className="feature">
                    <p>
                      <FaHouseUser className="fs-5 ms-1" />
                    </p>
                    <p className="mx-4">
                      <h6> Host or others may share home</h6>
                    </p>
                  </div>
                </main>
                <hr />
                {/* shared   */}
                <div className="d-flex my-3">
                  <p>
                    <FaBed className="fs-5" />
                  </p>
                  <div className="mx-3">
                    <h6>Room in a condo</h6>
                    <p className="grey">
                      Your own room in a home, plus access to shared spaces.
                    </p>
                  </div>
                </div>
                {/* wifi */}
                <div className="d-flex ">
                  <p>
                    <AiOutlineWifi className="fs-5" />
                  </p>
                  <div className="mx-3">
                    <h6>Fast wifi</h6>
                    <p className="grey">
                      At 90 Mbps, you can take video calls and stream videos for
                      your whole group.
                    </p>
                  </div>
                </div>
                <hr />
                {/* aircover  */}
                <h2>
                  {" "}
                  <span className="text-danger">air</span>cover
                </h2>
                <p>
                  Every booking includes free protection from Host
                  cancellations, listing inaccuracies, and other issues like
                  trouble checking in.
                </p>
                <h6 className="text-decoration-underline">Learn more</h6>
                <hr />
                {/* host  */}
                <h3 className="my-2">Meet your host</h3>

                <article>
                  <div className="host_Profile shadow">
                    <div>
                      <div className="hostPhoto">
                        <img src={property?.host?.Avatar} alt="" />
                      </div>
                      <h3 className="fw-bold m-0 text-center">
                        {property?.host?.FirstName}
                      </h3>
                      <span className="fw-normal text-center ms-4">
                        superhost
                      </span>
                    </div>
                    <div>
                      <h5 className="m-0">{property.Review || 2}</h5>
                      <p style={{ fontSize: "12px", margin: "0px" }}>
                        {" "}
                        Reviews
                      </p>
                      <hr />
                      <h5 className="m-0">
                        5.0 <FaStar />
                      </h5>
                      <p style={{ fontSize: "12px", margin: "0px" }}>
                        {" "}
                        Reviews
                      </p>
                      <hr />
                      <h5 className="m-0">{property.Review || 1}</h5>
                      <p style={{ fontSize: "12px", margin: "0px" }}>
                        {" "}
                        months hosting
                      </p>
                      <hr />
                    </div>
                  </div>

                  <div className="about_host">
                    <div className="d-flex mt-2">
                      <p>
                        <BsBalloon />
                      </p>
                      <p className="mx-4 ">
                        Born in the{" "}
                        {String(property.host.DOB).slice(8, -1) + "0s"}
                      </p>
                    </div>

                    <div className="d-flex ">
                      <p>
                        <BsFillBagCheckFill />
                      </p>
                      <p className="mx-4 ">My work: {property.host.Work}</p>
                    </div>

                    <div className="d-flex ">
                      <p>
                        <BsFillBagHeartFill />
                      </p>
                      <p className="mx-4 ">About: {property.host.About}</p>
                    </div>
                    <div className="d-flex ">
                      <p>
                        <BsFillBagHeartFill />
                      </p>
                      <p className="mx-4 ">
                        Languages: {property.host.Language.join(", ")}
                      </p>
                    </div>
                    <p>
                      We are young professionals who love traveling, movies,
                      music, arts and good design.
                    </p>
                    <p className="text-decoration-underline fw-bold">
                      Show more
                    </p>

                    <button className="btn btn-dark p-3"> Message Host</button>
                    <hr />
                    <span>
                      {" "}
                      To protect your payment, never transfer money or
                      communicate outside of the Airbnb website or app.
                    </span>
                  </div>
                </article>

                {/* description  */}
                <div className="my-3">
                  <h3>About this place</h3>
                  <p>{property.About}</p>
                  <p>{property.description}</p>
                </div>
                <hr />
                <div id="amenities" className="mt-5">
                  <h4> What this place offers</h4>
                  <ul>
                    {property.Amenities.map((amenity, index) => (
                      <li className="fs-6" key={index}>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-dark p-3">
                    Show all {property.Amenities.length} Amenitites
                  </button>
                </div>
              </div>
              {/* reserve */}

              <div className={`reserve shadow ${sticky && "stick"}`}>
                <div className="d-flex justify-content-between">
                  {" "}
                  <h5 className="fw-bold">
                    ${property.price}{" "}
                    <span className="fw-normal fs-6">night</span>{" "}
                  </h5>
                  <p>
                    {" "}
                    <FaStar className="mb-1" /> {property.review || 4.98}
                  </p>
                </div>

                <div className="date mt-3">
                  <div className="calender">
                    <div className="w-50">
                      {" "}
                      <span className="m-3">check-in</span>
                    </div>
                    <div className="check-out">
                      {" "}
                      <span className="m-3"> check-out </span>
                    </div>
                  </div>
                  <div className="drop" onClick={() => setdrop(!drop)}>
                    <p>
                      <span className="guests">GUESTS</span> <br />
                      <span> 1 guests</span>
                    </p>
                    <p>
                      <FaAngleDown />
                    </p>
                    {/* dropdown */}
                    {drop && (
                      <main className="guest-info shadow p-3">
                        {/* Adults  */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6>Adults</h6>
                            <p>Age 13+</p>
                          </div>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ width: "80px" }}
                          >
                            <button> -</button>
                            <p className="m-0">1</p>
                            <button>+</button>
                          </div>
                        </div>
                        {/* children  */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6>Children</h6>
                            <p>Age 2-12</p>
                          </div>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ width: "80px" }}
                          >
                            <button disabled> -</button>
                            <p className="m-0">0</p>
                            <button>+</button>
                          </div>
                        </div>
                        {/* infants  */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6>infants</h6>
                            <p>under 2</p>
                          </div>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ width: "80px" }}
                          >
                            <button disabled> -</button>
                            <p className="m-0">0</p>
                            <button>+</button>
                          </div>
                        </div>
                        {/* pets  */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6>Pets</h6>
                            <p>Bringing a service animal?</p>
                          </div>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ width: "80px" }}
                          >
                            <button disabled> -</button>
                            <p className="m-0">0</p>
                            <button>+</button>
                          </div>
                        </div>
                        <span>
                          This place has a maximum of 2 guests, not including
                          infants. Pets aren't allowed.
                        </span>
                        <p
                          className=" text-decoration-underline text-end"
                          onCanPlay={() => setdrop(false)}
                        >
                          {" "}
                          close
                        </p>
                      </main>
                    )}
                  </div>
                </div>
                <button className="w-100 p-2 btn btn-danger mt-4">
                  Reserve
                </button>
                <p className="text-center mt-3">You won't be charged yet</p>

                <main className="my-3">
                  <div className="d-flex justify-content-between">
                    {" "}
                    <span className="text-decoration-underline">
                      ${property.price} x 5 nights{" "}
                    </span>
                    <span className="fw-bold">${property.price * 5}</span>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    {" "}
                    <span className="text-decoration-underline">
                      cleaning fee
                    </span>
                    <span className="fw-bold">$33</span>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    {" "}
                    <span className="text-decoration-underline">
                      Airbnb service fee
                    </span>
                    <span className="fw-bold">$87</span>
                  </div>
                </main>
                <hr />

                <div className="d-flex justify-content-between my-3">
                  {" "}
                  <h6>Total before taxes</h6>
                  <span className="fw-bold">
                    ${property.price * 5 + 33 + 87}
                  </span>
                </div>
              </div>
            </main>
          </section>
          <FooterProp />
        </>
      )}
      <div className="mobilefooter shadow">
        <h5>
          ${property.price} <span className="fw-normal">night</span>{" "}
        </h5>

        <button className="btn btn-danger p-2"> Reserve </button>
      </div>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Property;
