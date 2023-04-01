import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import PopModal from "../SignUp";
import "./Navbar.css";
const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function HideDropdown(params) {
    setModalShow(true);
    setDropdown(false);
  }
  return (
    <nav className=" navMain p-0  shadow">
      <section className="divMain">
        <div className="navDiv1 ">
          <Link to={"/"} className="text-decoration-none">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
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
            <div className="dropdown shadow">
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
