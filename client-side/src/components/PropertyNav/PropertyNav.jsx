import { Link } from "react-router-dom";
import "./PropertyNav.css";
import Airbnblogo from "../../assets/airbnb-logo.png";

const PropertyNav = () => {
  return (
    <>
      <nav className=" web ">
        {/* web  */}
        <div className="ms-4">
          <Link to={"/"} className="text-decoration-none">
            <img src={Airbnblogo} alt="" className="image" />
          </Link>
        </div>
        <div className=" d-flex ms-auto mx-4">
          <div className=" exit ">Questions?</div>
          <div className="exit "> Save & Exit </div>
        </div>
      </nav>
      {/* mobile */}
      <nav className=" mobile ">
        <div className="exitMobile "> save & exit </div>
        <div className=" exitMobile ">Questions?</div>
      </nav>
      ;
    </>
  );
};
export default PropertyNav;
