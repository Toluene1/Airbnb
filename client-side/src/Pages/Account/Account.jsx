import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import "./Account.css";
import { FaRegAddressCard, FaAirbnb } from "react-icons/fa";
import { TfiShield } from "react-icons/tfi";
import { RxSpeakerLoud } from "react-icons/rx";
import UserPics from "../../../src/assets/User.jpg";

import {
  BsCreditCard,
  BsFileEarmarkSpreadsheet,
  BsToggles,
  BsGrid1X2,
  BsHeadset,
} from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { BiUserCircle, BiGift } from "react-icons/bi";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import PopModal from "../../components/SignUp";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import { Existing } from "../../utils/setlocalstorage";
import Footer from "../../components/Footer/Footer";

function Accounts() {
  const {
    setUser,
    User,

    setModalShow,
    modalShow,
    authloading,
    setauthloading,
    setexisting,
  } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    navigate("/");
    location.reload();
    Existing(setexisting);
  };

  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setauthloading(true);
        const response = await httpAuth.get("/user/fetchUser");
        setUser(response.data.user);
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

  return (
    <div>
      <NavbarAuth />
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <section>
          {/* // WEB SECTION  */}
          <main className="mainDivs webAccount">
            <div className="mt-3">
              <h1 style={{ fontSize: "30px" }}>Account</h1>
              <span className="fw-bold">
                {User.FirstName} {User.LastName} ,
              </span>
              <span>{User.Email}</span>
              <span>
                <Link
                  className="text-dark ms-2 fw-bold"
                  style={{ textDecoration: "underline" }}
                  to={"/profile"}
                >
                  .Go to profile
                </Link>
              </span>
            </div>
            <div className="mt-5 divAboveGrid gap-4">
              <div className="shadow ps-3 ">
                <Link to={"/personalInfo"}>
                  <p>
                    <FaRegAddressCard
                      className=" mt-3"
                      style={{ fontSize: "35px" }}
                    />
                  </p>
                  <div className="textCard">
                    <p className="fw-bold">Personal Info</p>
                    <p className="fw-light" style={{ fontSize: "14px" }}>
                      Provide personal details on how we <br /> can reach you
                    </p>
                  </div>
                </Link>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <TfiShield className=" mt-3" style={{ fontSize: "35px" }} />
                </p>
                <div className="textCard">
                  <p className="fw-bold">login & Security</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Update yout password and secure
                    <br />
                    your account
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <BsCreditCard
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Payment & payouts </p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Review payments, payouts, coupons <br /> and cards
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <BsFileEarmarkSpreadsheet
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Taxes</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Manage tax payer information and <br /> tax documents
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <RxSpeakerLoud
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Notifications</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Choose notification and how you want <br /> to be contacted
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <FaRegAddressCard
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Personal Info</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Provide personal details on how <br /> we can reach you
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <FaRegAddressCard
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Personal Info</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Provide personal details on how <br /> we can reach you
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <FaRegAddressCard
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Personal Info</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Provide personal details on how <br /> we can reach you
                  </p>
                </div>
              </div>
              <div className="shadow ps-3 ">
                <p>
                  <FaRegAddressCard
                    className=" mt-3"
                    style={{ fontSize: "35px" }}
                  />
                </p>
                <div className="textCard">
                  <p className="fw-bold">Personal Info</p>
                  <p className="fw-light" style={{ fontSize: "14px" }}>
                    Provide personal details on how <br /> we can reach you
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* //MOBILE SECTION  */}
          <main className="px-4 mobileAccount ">
            <div>
              <h1 className="mt-2">Profile</h1>
              <section>
                <div className="d-flex align-center mt-4  ">
                  <div className="imgMobile">
                    <img
                      src={User?.Avatar || UserPics}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                    to={"/profile"}
                  >
                    <span>{User.LastName}</span> <br />{" "}
                    <span className="fw-light">Show Profile</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount" />
                    </span>
                  </Link>
                </div>
              </section>
              <hr className="mt-4" />
              <section>
                <Link
                  className="ms-3 text-dark text-decoration-none mt-1"
                  style={{ width: "100%" }}
                >
                  <Link to={"/become-a-host"}>
                    <div
                      className="shadow "
                      style={{
                        height: "130px",
                        width: "100%",
                        borderRadius: "15px",
                        border: "1px solid lightgrey",
                        paddingTop: "40px",
                        paddingLeft: "20px",
                      }}
                    >
                      <span>Airbnb your place</span> <br />{" "}
                      <span className="fw-light">
                        its simple to get set up and start earning
                      </span>
                      <span>
                        <img
                          src="https://a0.muscache.com/pictures/b0021c55-05a2-4449-998a-5593567220f7.jpg"
                          alt=""
                          className="imgAirbnb"
                        />
                      </span>
                    </div>
                  </Link>
                </Link>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    to={"/personalInfo"}
                    className="ms-3 text-dark text-decoration-none mt-3"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <BiUserCircle className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Personal info</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                    to={"/Accounts"}
                  >
                    <span>
                      <FiSettings className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Account</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
              </section>
              <hr className="mt-4" />
              <section>
                <h4 className="mt-4">Hosting</h4>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                    to={"/listings"}
                  >
                    <span>
                      <BsToggles className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Manage your listing</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <BsGrid1X2 className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Host an experience</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
              </section>
              <hr className="mt-4" />
              <section>
                <h4 className="mt-4">Refferals & Credits</h4>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <BiGift className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Refer a host</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
              </section>
              <hr className="mt-4" />
              <section>
                <h4 className="mt-4">Support</h4>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <FaAirbnb className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">How Airbnb works</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <FiHelpCircle className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">Get help</span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-center mt-4  ">
                  <Link
                    className="ms-3 text-dark text-decoration-none mt-1"
                    style={{ width: "93%" }}
                  >
                    <span>
                      <BsHeadset className="fs-3 me-3 " />
                    </span>
                    <span className="fw-light">
                      Contact Neighborhood Support
                    </span>
                    <span>
                      <MdArrowForwardIos className="iconAccount2" />
                    </span>
                  </Link>
                </div>
              </section>
              <hr className="mt-4" />
              <section>
                <div className="mt-5">
                  <span>
                    <TbWorld className="" style={{ fontSize: "24px" }} />
                  </span>
                  <span className="ms-2">English (US)</span>
                  <span className="ms-3">$ USD</span>
                </div>
                <div>
                  <button
                    className="w-100 mt-5 bg-white text-dark border-dark p-2 logout"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </div>
              </section>
            </div>
          </main>
          <LoginFooter />
          <br />
          <br />
          <br />
        </section>
      )}
      <Footer />
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Accounts;
