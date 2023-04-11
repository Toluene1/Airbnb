import NavbarAuth from "../../components/Navbar/NavbarAuth";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      {" "}
      <NavbarAuth />
      <main className=" profile  ">
        <div className="profile-badge">
          <div className="d-flex justify-content-center mt-3 ">
            <div className="profile-img">
              <p>
                <FaUserCircle className=" fs-3 w-100" />
              </p>
            </div>
          </div>
          <p className="text-center fw-bolder text-decoration-underline my-2">
            Update Photo
          </p>
          <p>
            <BsFillShieldLockFill className="fs-3 my-4 " />
          </p>
        </div>

        <div></div>
      </main>
    </>
  );
};
export default Profile;
