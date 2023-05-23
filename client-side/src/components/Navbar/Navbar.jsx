import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import UserPics from "../../../src/assets/User.jpg";
import PopModal from "../SignUp";
import FilterProperties from "../filterProperties";
import "./Navbar.css";
import { Context } from "../../Provider/Context";
import { Existing } from "../../utils/setlocalstorage";
import Airbnblogo from "../../assets/airbnb-logo.png";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [showWish, setshowWish] = useState(false);
  const dropdownRef = useRef(null);
  const {
    modalShow,
    setModalShow,
    User,
    Loggedin,
    setFilterShow,
    filterShow,
    fullscreen,
    setFullscreen,
    setexisting,
    wishlist,
  } = useContext(Context);
  const navigate = useNavigate();

  //close filter
  const checkmodalShow = () => {
    if (window.innerWidth > 735) {
      setFilterShow(false);
    }
  };
  function showFilter() {
    setFilterShow(true);
    setFullscreen(true);
  }

  // closeDropDown
  function HideDropdown() {
    setModalShow(true);
    setDropdown(false);
  }

  const checkInnerwidth = () => {
    if (window.innerWidth < 735) {
      setDropdown(false);
    }
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
    window.addEventListener("resize", checkmodalShow);
    return () => {
      window.removeEventListener("resize", checkmodalShow);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", checkInnerwidth);
    return () => {
      window.removeEventListener("resize", checkInnerwidth);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (wishlist.length < 1) {
      setshowWish(false);
    } else {
      setshowWish(true);
    }
  }, [wishlist]);
  // log Out
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    location.reload();
    Existing(setexisting);
    navigate("/");
  };

  return (
    <nav className=" navMain p-0  text-center ">
      <section className="divMain">
        <div className="navDiv1  ">
          <Link to={"/"} className="text-decoration-none">
            <img src={Airbnblogo} alt="" className="imageDiv1" />
          </Link>
        </div>
        {/* added the searchDropdown */}
        <SearchDropdown />
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
              className="userButton  position-relative "
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
              {showWish && (
                <div className="length">
                  <span>{wishlist.length} </span>
                </div>
              )}
            </button>
          </div>
          {dropdown && (
            <div ref={dropdownRef} className="dropdown shadow px-0 text-start">
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
                  <Link to={"/wishlist"}>
                    {" "}
                    <p>
                      {" "}
                      Wishlist{" "}
                      {showWish && (
                        <span className="text-danger mx-3 ">
                          ({wishlist.length})
                        </span>
                      )}
                    </p>
                  </Link>
                  <hr />
                  <Link to={"/listings"}>
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
      </section>
      {/* Mobile section */}
      <section>
        <div className="inputNav shadow">
          <div>
            <button className="inputButton1">
              <AiOutlineSearch className="searchIcon" />
            </button>
          </div>
          <div className="anyDiv me-auto">
            <span className="anyWhere">Anywhere</span> <br />
            <span className="anyWeek"> Any Week - Add guests</span>
          </div>
          <div>
            <button className="inputButton2" onClick={showFilter}>
              <FaSlidersH className="searchIcon2" />
            </button>
          </div>
        </div>
        <FilterProperties
          show={filterShow}
          fullscreen={fullscreen}
          onHide={() => setFilterShow(false)}
        />
      </section>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </nav>
  );
};
export default Navbar;

// navigate("/login", {
//   state: { previousUrl: location.pathname },
// });
