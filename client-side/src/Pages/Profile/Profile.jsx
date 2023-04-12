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
import { handleSaveUser } from "../../utils/setlocalstorage";
const Profile = () => {
  const [editprofile, seteditprofile] = useState(false);
  const { setUser, User, UserImg, setauthloading, authloading, setModalShow } =
    useContext(Context);
  const [loading, setloading] = useState(false);
  let isMounted = true;

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);

    try {
      setloading(true);
      const response = await httpAuth("/uploadPhoto", {
        method: "post",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser(response.data.user);
      setloading(false);
      handleSaveUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setauthloading(true);
        const response = await httpAuth.get("/fetchUser");
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
    <>
      {" "}
      <NavbarAuth />
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <main className=" profile mt-5 ">
          <div className="profile-badge">
            <section>
              <div>
                {UserImg ? (
                  <div className="profile-img m-auto d-flex justify-content-center align-items-center">
                    {loading ? (
                      <div className="spinner-border text-secondary "></div>
                    ) : (
                      <img
                        src={User?.Avatar}
                        alt=""
                        style={{
                          width: "100%",
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <FaUserCircle className="iconImage" />
                )}
              </div>{" "}
              <form>
                <div className="file-input text-center my-3">
                  <label htmlFor="my-file">Upload Photo</label>
                  <input
                    type="file"
                    id="my-file"
                    name="image"
                    onChange={handleImageChange}
                  />
                </div>
              </form>
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
      )}
      <LoginFooter />
      <Footer />
    </>
  );
};
export default Profile;
