import NavbarAuth from "../../components/Navbar/NavbarAuth";
import { BsShieldCheck } from "react-icons/bs";
import React, { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
import Footer from "../../components/Footer/Footer";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import EditProfile from "../../utils/EditProfile";
const Profile = () => {
  const [editprofile, seteditprofile] = useState(false);
  const { setUser, User, UserImg, setauthloading } = useContext(Context);
  let isMounted = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setauthloading(true);
        const response = await httpAuth.get("/fetchUser");
        setUser(response.data.user);
        setauthloading(false);
      } catch (error) {
        setauthloading(true);
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
    <>
      {" "}
      <NavbarAuth />
      <main className=" profile mt-5 ">
        <div className="profile-badge">
          <section>
            <div>
              {UserImg ? (
                <div className="profile-img m-auto">
                  <img
                    src={User?.Avatar}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ) : (
                <FaUserCircle className="iconImage" />
              )}
            </div>{" "}
            <p className="text-center fw-bolder text-decoration-underline my-2">
              Update Photo <br />
              <input type="file" className="ms-5" />
            </p>
          </section>
          <section className="ms-4">
            <div>
              <p>
                <BsShieldCheck className="fs-3 my-1 mt-3 " />
              </p>
              <h5 className="fw-bold">Identity verification</h5>
              <p>
                Show others you’re really you with <br /> the identity
                verification badge.
              </p>
              <div>
                <button className="profileBadge px-4">Get the badge</button>
              </div>
            </div>
            <hr className="mt-4 me-4" />
            <h5 className="fw-bold mt-4">{User.LastName} confirmed</h5>
            <p className="mt-3">
              <TiTick /> Email address
            </p>
          </section>
        </div>

        <div className="profile-badge2">
          <h1>Hi, I'm {User.LastName}</h1>
          <span className="fw-light">Joined in {User.createdAt}</span>
          <p className="mt-3">
            {" "}
            <button
              className="buttonToggle"
              onClick={() => seteditprofile(!editprofile)}
            >
              {editprofile ? "Cancel" : "Edit profile"}
            </button>
          </p>
          <div>
            {editprofile ? (
              <EditProfile seteditprofile={seteditprofile} />
            ) : (
              <p>tolu</p>
            )}
          </div>
        </div>
      </main>
      <LoginFooter />
      <Footer />
    </>
  );
};
export default Profile;
