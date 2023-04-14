import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaUserCircle, FaSlidersH } from "react-icons/fa";
import PopModal from "../SignUp";
import FilterProperties from "../filterProperties";
import "./Navbar.css";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import { Existing } from "../../utils/setlocalstorage";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const {
    modalShow,
    setModalShow,
    setUser,
    UserImg,
    User,
    Loggedin,
    setFilterShow,
    filterShow,
    fullscreen,
    setFullscreen,
    setexisting,
  } = useContext(Context);
  const navigate = useNavigate();
  let isMounted = true;

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
    const fetchUser = async () => {
      try {
        const response = await httpAuth.get("/fetchUser");
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

  // log Out
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    localStorage.removeItem("img");
    location.reload();
    Existing(setexisting);
    navigate("/");
  };

  return (
    <nav className=" navMain p-0  text-center ">
      <section className="divMain">
        <div className="navDiv1 ">
          <Link to={"/"} className="text-decoration-none">
            <img
              src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
              alt=""
              className="imageDiv1"
            />
          </Link>
        </div>
        <div className="navDiv2 ">
          <button className="div2Button1">Anywhere</button>
          <button className="div2Button2">Any Week</button>
          <button className="div2Button3">
            <span className="anyGuest">Any guest</span>
            <AiOutlineSearch className="iconButton" />
          </button>
        </div>
        <div className="navDiv3 ">
          {Loggedin ? (
            <div>
              <Link
                to={"/"}
                className="text-decoration-none text-dark fw-normal"
              >
                {" "}
                Switch to hosting
              </Link>
            </div>
          ) : (
            <div>
              <Link to={"/"} className="text-decoration-none text-dark">
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
              {UserImg ? (
                <div className="user-img">
                  <img src={User?.Avatar} alt="" style={{ width: "100%" }} />
                </div>
              ) : (
                <FaUserCircle className="iconAvatar" />
              )}
            </button>
          </div>
          {dropdown && (
            <div ref={dropdownRef} className="dropdown shadow px-0 text-start">
              {Loggedin ? (
                <div>
                  <p>
                    {" "}
                    <Link className="fw-bold  text-dark">Messages</Link>
                  </p>
                  <p>
                    {" "}
                    <Link>Trips</Link>
                  </p>
                  <p>
                    {" "}
                    <Link onClick={HideDropdown}>Wishlist</Link>
                  </p>
                  <hr />
                  <p>
                    {" "}
                    <Link>Manage listings</Link>
                  </p>
                  <p>
                    {" "}
                    <Link>Manage experiences</Link>
                  </p>
                  <p>
                    {" "}
                    <Link to={"/Accounts"}>Account</Link>
                  </p>
                  <hr />
                  <p>
                    {" "}
                    <Link>Help </Link>
                  </p>
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
                  <p>
                    <Link>Airbnb your home</Link>
                  </p>
                  <p>
                    {" "}
                    <Link>Host an experience</Link>{" "}
                  </p>
                  <p>
                    <Link>Help</Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="inputNav">
          <button className="inputButton1">
            <AiOutlineSearch className="searchIcon" />
          </button>
          <div className="anyDiv">
            <span className="anyWhere">Anywhere</span> <br />
            <span className="anyWeek"> Any Week - Add guests</span>
          </div>
          <button className="inputButton2" onClick={showFilter}>
            <FaSlidersH className="searchIcon2" />
          </button>
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
