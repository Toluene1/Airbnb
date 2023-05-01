import React, { useState, useEffect, useMemo, useContext } from "react";
import "./About-your-place.css";
import Airbnbhouse3 from "../../assets/house3.jpg";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import { setId } from "../../utils/setlocalstorage";

function AboutYourPlace() {
  const { setpropertyId } = useContext(Context);
  const [loading, setloading] = useState();
  const navigate = useNavigate();
  const createProperty = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post("/property/create");
      setloading(false);
      setId(setpropertyId, response.data.prop);
      navigate("/become-a-host/structure");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <PropertyNav />
      <section className="divCover gap-5 animate__animated animate__fadeInRight">
        <div className="div1">
          <img
            src={Airbnbhouse3}
            style={{ width: "100%", borderRadius: "20px" }}
            alt=""
          />
        </div>
        <div className="div2 fs-5">
          <p className="fs-3">Step 1</p>
          <h1>Tell us about your place</h1>
          <p>
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
      </section>
      <footer className="Navfooter ">
        <Link to={"/become-a-host/overview"}>
          <p className="text-decoration-underline fw-bold text-dark">Back</p>
        </Link>

        <button className="Navfooterbtn text-white" onClick={createProperty}>
          {loading ? (
            <span className="spinner-border text-secondary"></span>
          ) : (
            "Next"
          )}
        </button>
      </footer>
    </main>
  );
}

export default AboutYourPlace;
