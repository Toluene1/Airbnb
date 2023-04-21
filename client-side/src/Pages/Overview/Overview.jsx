import { Link } from "react-router-dom";
import "./overview.css";
import Airbnblogo from "../../assets/airbnb-logo.png";
import Home from "../../assets/home.webp";
import Home2 from "../../assets/home2.webp";
import Home3 from "../../assets/home3.webp";

const Overview = () => {
  return (
    <>
      <nav className=" web ">
        {/* web  */}
        <div className="ms-4">
          <Link to={"/"} className="text-decoration-none">
            <img src={Airbnblogo} alt="" className="image" />
          </Link>
        </div>
        <div className="  ms-auto mx-4">
          <div className="saveexit "> save & exit </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className=" mobile ">
        <div className="exit "> save & exit </div>
      </nav>

      {/* tell us about your place  */}
      <section className="overview">
        <div className="airbnb">
          <h1>It’s easy to get started on Airbnb</h1>
        </div>
        <main>
          <article>
            <div>
              <h4>1 Tell us about your place </h4>
              <p>
                Share some basic info, like where it is and how many guests can
                stay.
              </p>
            </div>
            <div className="img">
              <img src={Home} alt="" />
            </div>
          </article>
          <article>
            <div>
              <h4>2 Make it stand out</h4>
              <p>
                Add 5 or more photos plus a title and description—we’ll help you
                out.
              </p>
            </div>
            <div className="img">
              <img src={Home2} alt="" />
            </div>
          </article>
          <article>
            <div>
              <h4>3 Finish up and publish</h4>
              <p className="pe-5">
                Choose if you'd like to start with an experienced guest, set a
                starting price, and publish your listing.
              </p>
            </div>
            <div className="img">
              <img src={Home3} alt="" />
            </div>
          </article>
        </main>
      </section>

      <footer className="footer shadow">
        <Link to={"/become-a-host/structure"}>
          <div className="text-end">
            <button className="btn btn-danger p-2 fw-bold ">Get Started</button>
          </div>
        </Link>
      </footer>
    </>
  );
};
export default Overview;
