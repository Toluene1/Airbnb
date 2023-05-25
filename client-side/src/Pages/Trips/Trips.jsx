import { Link } from "react-router-dom";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import "./Trips.css";
const Trips = () => {
  return (
    <>
      <NavbarAuth />

      <section className="trips">
        <h2>Trips</h2>
        <hr className="text-dark" />
        <div className="py-3 ">
          <h4>No trips booked...yet!</h4>
          <p>
            Time to dust off your bags and start planning your next adventure
          </p>
          <Link to={"/"}>
            <button className="text-dark ">Start searching</button>
          </Link>
        </div>
        <hr />
        <p className="my-3">
          {" "}
          Can’t find your reservation here?
          <span className="text-decoration-underline mx-1">
            Visit the Help Center
          </span>
        </p>
      </section>

      <LoginFooter />
    </>
  );
};
export default Trips;
