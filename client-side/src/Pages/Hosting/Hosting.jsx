import { Link } from "react-router-dom";
import "./Hosting.css";
import { BsHouseAdd } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useContext, useEffect } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import Airbnblogo from "../../assets/airbnb-logo.png";

const Hosting = () => {
  const { setUser, User, setauthloading, authloading, setModalShow } =
    useContext(Context);
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
      <nav className=" web ">
        {/* web  */}
        <div>
          <Link to={"/"} className="text-decoration-none">
            <img src={Airbnblogo} alt="" className="image" />
          </Link>
        </div>
        <div className=" d-flex ms-auto mx-4">
          <div className=" exit ">Questions?</div>
          <div className="exit ">Exit </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className=" mobile ">
        <div className="exitMobile ">Exit </div>
        <div className=" exitMobile ">Questions?</div>
      </nav>
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <main className="listing">
          <h3>Welcome Back, {User.FirstName}</h3>

          <h4 className="mt-5">Start a New Listing</h4>
          <div>
            <p className="d-flex justify-content-between align-items-center">
              {" "}
              <p>
                {" "}
                <BsHouseAdd className="icon" />
              </p>
              <p className="mx-3 fs-6"> Create a new listing</p>
            </p>
            <p className="fs-5 pb-3">
              {" "}
              <FaAngleRight />
            </p>
          </div>
          <div>
            <p className="d-flex justify-content-between align-items-center">
              {" "}
              <p className="fs-2">
                {" "}
                <HiOutlineDocumentDuplicate />
              </p>
              <p className="mx-3 fs-6"> Duplicate an existing Listing</p>
            </p>
            <p className="fs-5 pb-3">
              {" "}
              <FaAngleRight />
            </p>
          </div>
        </main>
      )}
    </>
  );
};
export default Hosting;
