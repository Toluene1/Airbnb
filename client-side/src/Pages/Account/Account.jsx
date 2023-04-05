import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import "./Account.css";
import { FaRegAddressCard } from "react-icons/fa";
import { TfiShield } from "react-icons/tfi";
import { RxSpeakerLoud } from "react-icons/rx";
import { BsCreditCard, BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

function Accounts() {
  const { setUser, User, UserImg } = useContext(Context);
  const [mobile, setMobile] = useState(false);
  let isMounted = true;
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

  // useEffect(() => {
  //   window.addEventListener("resize", setMobileShow);
  //   return () => {
  //     window.removeEventListener("resize", setMobileShow);
  //   };
  // }, [window.innerWidth]);

  // const setMobileShow = () => {
  //   if (window.innerWidth > 735) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // };

  return (
    <section className="">
      <br />
      <br />
      <br />
      <main className="mainDiv webAccount">
        <div style={{ lineHeight: "10px" }} className="divTop">
          <h1 className="account flex-start" style={{ fontSize: "30px" }}>
            Account
          </h1>
          <span className="fw-bold">
            {User.FirstName} {User.LastName} ,
          </span>
          <span>{User.Email}</span>
          <span>
            <Link
              className="text-dark ms-2 fw-bold"
              style={{ textDecoration: "underline" }}
            >
              .Go to profile
            </Link>
          </span>
        </div>
        <div className="mt-5 divAboveGrid gap-4">
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
                Provide personal details on how we <br /> can reach you
              </p>
            </div>
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
              <BsCreditCard className=" mt-3" style={{ fontSize: "35px" }} />
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
              <RxSpeakerLoud className=" mt-3" style={{ fontSize: "35px" }} />
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
      <main className="ps-4 mobileAccount pe-4">
        <div>
          <h1>Profile</h1>
          <section>
            <div className="d-flex align-center mt-4  ">
              {UserImg ? (
                <div className="imgMobile">
                  <img
                    src={User?.Avatar}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              ) : (
                <FaUserCircle className="iconAvatar" />
              )}
              <Link
                className="ms-3 text-dark text-decoration-none mt-1"
                style={{ width: "93%" }}
              >
                <span>{User.LastName}</span> <br />{" "}
                <span className="fw-light">Show Profile</span>
                <span>
                  <MdArrowForwardIos className="iconAccount" />
                </span>
              </Link>
            </div>
          </section>
          <hr className="mt-4 bg-light" />
          <section>
            <Link
              className="ms-3 text-dark text-decoration-none mt-1"
              style={{ width: "100%" }}
            >
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
          </section>
        </div>
      </main>
    </section>
  );
}

export default Accounts;
