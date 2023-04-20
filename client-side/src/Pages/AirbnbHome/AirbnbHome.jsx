import React, { useState, useEffect, useContext } from "react";
import "./AirbnbHome.css";
import Airbnblogo from "../../assets/airbnb-logo.png";
import Airbnbsetup from "../../assets/airbnb-setup.webp";
import Airbnbsetup2 from "../../assets/airbnbsetup2.webp";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { Context } from "../../Provider/Context";

function AirbnbHome() {
  const [rangeval, setRangeval] = useState("85");
  const [text, setText] = useState("Airbnb setup");

  const changeText = () => {
    setText("Get started");
  };
  const normalText = () => {
    setText("Airbnb setup");
  };

  return (
    <main>
      <section className="navDiv sticky-top shadow">
        <div className="logo">
          <Link to={"/"} className="text-decoration-none">
            <img src={Airbnblogo} alt="" className="imageLogo" />
          </Link>
        </div>
        <div className="divButton">
          <button className="ButtonNav">Chat with a Superhost</button>
        </div>
      </section>
      <section className="div-PriceMap text-center gap-3 mt-5">
        <div className="priceDiv">
          <h1
            className="text-danger"
            style={{
              fontSize: "50px",
              marginTop: "70px",
              fontWeight: "700",
            }}
          >
            Airbnb it.
          </h1>
          <h1 className="reduceText">You could earn</h1>
          <div>
            <h1 style={{ fontSize: "60px" }} className="fw-bolder">
              $ {rangeval}
            </h1>
            <p>** nights at an estimated $85 per night</p>
            <input
              type="range"
              className="custom-range"
              min="85"
              max="3999"
              onChange={(event) => setRangeval(event.target.value)}
            />
            <p className="text-decoration-underline mt-4">
              learn how we estimate your earnings
            </p>
            <div className="input-address">
              <div>
                <AiOutlineSearch
                  style={{
                    fontSize: "25px",
                    marginLeft: "18px",
                    marginTop: "20px",
                  }}
                />
              </div>
              <div
                className=" ms-3"
                style={{ lineHeight: "20px", marginTop: "10px" }}
              >
                <span className="fw-bold">Lagos</span>
                <p className="fw-light">Entire place - 2 bedrooms</p>
              </div>
            </div>
            <button className="buttonSwitch">
              <BiHomeCircle
                style={{ fontSize: "30px", color: "white", marginTop: "-8px" }}
              />
              <span
                style={{ color: "white", fontSize: "20px", marginLeft: "5px" }}
                onMouseOver={changeText}
                onMouseOut={normalText}
              >
                {text}
              </span>
            </button>
          </div>
        </div>
        <div className="mapDiv">
          <h1>tolu</h1>
        </div>
      </section>
      <section style={{ marginTop: "70px" }}>
        <p className="airbnbText ">Airbnb it easily with Airbnb Setup</p>
        <div className="imageDiv">
          <img src={Airbnbsetup} className="airbnbSetup" alt="" />
          <img src={Airbnbsetup2} className="airbnbSetup2" alt="" />
        </div>
      </section>
    </main>
  );
}

export default AirbnbHome;
