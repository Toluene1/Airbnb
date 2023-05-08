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
import { FaBars } from "react-icons/fa";
import UserPics from "../../../src/assets/User.jpg";
import httpAuth from "../../Services/config";
import PopModal from "../../components/SignUp";

const Property = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [property, setproperty] = useState({});
  const [loading, setloading] = useState(false);
  const { User, Loggedin, setUser, modalShow, setModalShow } =
    useContext(Context);
  const { id } = useParams();
  let isMounted = true;

  function HideDropdown() {
    setModalShow(true);
    setDropdown(false);
  }

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
  console.log(property);
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
            <GiSelfLove />
          </p>
        </div>
      </nav>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Property;
