import { Link } from "react-router-dom";
import "./ListingsNav.css";
import Airbnblogo from "../../assets/airbnb-logo.png";
import { BiBell } from "react-icons/bi";
import UserPics from "../../../src/assets/User.jpg";
import { Context } from "../../Provider/Context";
import { useContext, useEffect, useRef, useState } from "react";
import httpAuth from "../../Services/config";
import { FaBars } from "react-icons/fa";

const ListingsNav = () => {
  const { setUser, User } = useContext(Context);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  let isMounted = true;

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

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    location.reload();
    Existing(setexisting);
    navigate("/");
  };
  return (
    <>
      <main>
        <section>
          <nav className=" webs px-4 ">
            {/* web  */}
            <div>
              <Link to={"/"} className="text-decoration-none">
                <img src={Airbnblogo} alt="" className="imagez" />
              </Link>
            </div>
            <div className=" d-flex justify-contetn-between align-items-center gap-4">
              <div className="bellDiv">
                <BiBell className="fs-5" />
              </div>
              <div
                className="imagesDivs"
                onClick={() => setDropdown(!dropdown)}
              >
                <img
                  src={User?.Avatar || UserPics}
                  alt=""
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </div>
              <div>
                <FaBars
                  className="fs-3 bar"
                  onClick={() => setDropdown(!dropdown)}
                />
              </div>
            </div>
            {dropdown && (
              <div
                ref={dropdownRef}
                className="dropdown shadow px-0 text-start"
              >
                <div>
                  <Link className="fw-bold  text-black" to={"/profile"}>
                    {" "}
                    <p> Profile</p>
                  </Link>
                  <Link className="fw-bold" to={"/Accounts"}>
                    {" "}
                    <p> Account</p>
                  </Link>
                  <Link className="fw-bold">
                    {" "}
                    <p>Get Help</p>
                  </Link>
                  <hr />
                  <Link>
                    {" "}
                    <p> Language and translation</p>
                  </Link>
                  <p>
                    {" "}
                    <Link>$USD</Link>
                  </p>
                  <hr />
                  <Link>
                    {" "}
                    <p> switch to travelling</p>
                  </Link>
                  <button
                    className="border-0 bg-white mx-2 p-0 text-dark"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </div>
              </div>
            )}
          </nav>
        </section>
      </main>
    </>
  );
};
export default ListingsNav;
