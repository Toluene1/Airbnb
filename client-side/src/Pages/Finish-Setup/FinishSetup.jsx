import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./FinishSetup.css";
import Airbnbhouse4 from "../../assets/house4.jpg";
import { Link } from "react-router-dom";

function StandOut() {
  return (
    <main>
      <PropertyNav />
      <section className="divCover gap-5 animate__animated animate__fadeInRight">
        <div className="div1">
          <img src={Airbnbhouse4} alt="" />
        </div>
        <div className="div2 fs-5">
          <p className="fs-3">Step 3</p>
          <h1>Finish up and publish</h1>
          <p>
            Finally, you’ll choose if you'd like to start with an experienced
            guest, then you'll set your nightly price. Answer a few quick
            questions and publish when you're ready.
          </p>
        </div>
      </section>
      <footer className="Navfooter ">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/description"}>Back</Link>
        </p>
        <Link to={"/become-a-host/price"} className="text-white">
          <button className="Navfooterbtn text-white">Next</button>
        </Link>
      </footer>
    </main>
  );
}

export default StandOut;
