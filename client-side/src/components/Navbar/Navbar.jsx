import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaUserCircle, FaSlidersH } from "react-icons/fa";
import PopModal from "../SignUp";
import "./Navbar.css";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { modalShow, setModalShow, setUser, UserImg, User, Loggedin } =
    useContext(Context);
  const navigate = useNavigate();
  let isMounted = true;
  // hideDropDown
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
    localStorage.clear();
    location.reload();
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
            <div className="dropdown shadow  text-start">
              {Loggedin ? (
                <div>
                  <p>
                    {" "}
                    <Link className="fw-bold  ">Messages</Link>
                  </p>
                  <p>
                    {" "}
                    <Link className="text-dark">Trips</Link>
                  </p>
                  <p>
                    {" "}
                    <Link className="text-dark" onClick={HideDropdown}>
                      Wishlist
                    </Link>
                  </p>
                  <hr />
                  <p>
                    {" "}
                    <Link className="text-dark">Manage listings</Link>
                  </p>
                  <p>
                    {" "}
                    <Link className="text-dark">Manage experiences</Link>
                  </p>
                  <p>
                    {" "}
                    <Link className="text-dark">Account</Link>
                  </p>
                  <hr />
                  <p>
                    {" "}
                    <Link className="text-dark">Help </Link>
                  </p>
                  <button
                    className="border-0 bg-white p-0"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div>
                  <p onClick={HideDropdown} className="fw-bold  ">
                    {" "}
                    Login{" "}
                  </p>{" "}
                  <p onClick={HideDropdown}>Sign Up</p>
                  <hr />
                  <p>
                    <Link className="text-dark">Airbnb your home</Link>
                  </p>
                  <p className="text-dark">
                    {" "}
                    <Link className="text-dark">Host an experience</Link>{" "}
                  </p>
                  <p>
                    <Link className="text-dark">Help</Link>
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
          <button className="inputButton2">
            <FaSlidersH className="searchIcon2" />
          </button>
        </div>
      </section>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </nav>
  );
};
export default Navbar;

// navigate("/login", {
//   state: { previousUrl: location.pathname },
// });
