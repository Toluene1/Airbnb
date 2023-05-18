import { Link } from "react-router-dom";
import "./ListingsNav.css";
import Airbnblogo from "../../assets/airbnb-logo.png";
import { BiBell } from "react-icons/bi";
import UserPics from "../../../src/assets/User.jpg";
import { Context } from "../../Provider/Context";
import { useContext, useEffect, useRef, useState } from "react";
import httpAuth from "../../Services/config";

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
          <nav className=" web ">
            {/* web  */}
            <div>
              <Link to={"/"} className="text-decoration-none">
                <img src={Airbnblogo} alt="" className="image" />
              </Link>
            </div>
            <div className=" d-flex ms-auto mx-4 gap-4">
              <div className="bellDiv">
                <BiBell className="fs-5" />
              </div>
              <div className="imagesDiv" onClick={() => setDropdown(!dropdown)}>
                <img
                  src={User?.Avatar || UserPics}
                  alt=""
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
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
                    className="border-0 bg-white mx-2 p-0"
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