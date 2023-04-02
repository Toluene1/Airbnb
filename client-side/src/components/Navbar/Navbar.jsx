import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaUserCircle, FaSlidersH } from "react-icons/fa";
import PopModal from "../SignUp";
import filterProperties from "../filterProperties";
import "./Navbar.css";
import { Context } from "../../Provider/Context";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { modalShow, setModalShow, filterShow, setFilterShow } =
    useContext(Context);
  // hideDropDown
  function HideDropdown() {
    setModalShow(true);
    setDropdown(false);
  }

  function showFilter() {
    setFilterShow(true);
  }
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
          <div className=" airHome">
            <Link to={"/"} className="text-decoration-none text-dark">
              {" "}
              Airbnb your home
            </Link>
            <TbWorld className="tbIcon" />
            <button
              className="userButton"
              onClick={() => setDropdown(!dropdown)}
            >
              <FaBars />
              <FaUserCircle className="iconAvatar" />{" "}
            </button>{" "}
          </div>
          {dropdown && (
            <div className="dropdown shadow text-start">
              <p onClick={HideDropdown}>Login </p>{" "}
              <p onClick={HideDropdown}>Sign Up</p>
              <hr />
              <p>
                <Link>Airbnb your home</Link>
              </p>
              <p className="text-dark">
                {" "}
                <Link>Host an experience</Link>{" "}
              </p>
              <p className="text-dark">
                <Link>Help</Link>
              </p>
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
        {/* <filterProperties
          show={filterShow}
          onHide={() => setFilterShow(false)}
        /> */}
      </section>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </nav>
  );
};
export default Navbar;

// const [User, setUser] = useState({});
//   const [loading, setloading] = useState(false);
//   let isMounted = true;
//   const navigate = useNavigate();
//   const location = useLocation();
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         setloading(true);
//         const response = await httpAuth.get("/fetchUser");
//         setUser(response.data.user);
//         setloading(false);
//       } catch (error) {
//         setloading(false);
//         // navigate("/login", {
//         //   state: { previousUrl: location.pathname },
//         // });
//       }
//     };

//     if (isMounted) {
//       fetchUser();
//     }
//     return () => {
//       isMounted = false;
//     };
//   }, []);
