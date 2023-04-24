import React, { useState, useEffect, useMemo } from "react";
import "./About-your-place.css";
import Airbnbhouse from "../../assets/airbnb-house.jpg";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import { Link } from "react-router-dom";

function AboutYourPlace() {
  return (
    <main>
      <PropertyNav />
      <section className="divCover gap-5">
        <div className="div1">
          <img src={Airbnbhouse} style={{ width: "100%" }} alt="" />
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
      <footer className="Navfooter sticky-bottom ">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/overview"}>Back</Link>
        </p>
        <Link to={"/become-a-host/structure"} className="text-white">
          <button className="Navfooterbtn text-white">next</button>
        </Link>
      </footer>
    </main>
  );
}

export default AboutYourPlace;
