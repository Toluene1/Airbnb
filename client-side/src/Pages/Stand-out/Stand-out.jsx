import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Stand-out.css";
import Airbnbhouse4 from "../../assets/house4.jpg";
import { Link } from "react-router-dom";

function StandOut() {
  return (
    <main>
      <PropertyNav />
      <section className="divCover gap-5 animate__animated animate__fadeInRight">
        <div className="div1">
          <img
            src={Airbnbhouse4}
            style={{ width: "100%", borderRadius: "19px" }}
            alt=""
          />
        </div>
        <div className="div2 fs-5">
          <p className="fs-3">Step 2</p>
          <h1>Make your place stand out</h1>
          <p>
            In this step, you’ll add some of the amenities your place offers,
            plus 5 or more photos. Then, you’ll create a title and description.
          </p>
        </div>
      </section>
      <footer className="Navfooter ">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/floor-plan"}>Back</Link>
        </p>
        <Link to={"/become-a-host/amenities"} className="text-white">
          <button className="Navfooterbtn text-white">Next</button>
        </Link>
      </footer>
    </main>
  );
}

export default StandOut;
