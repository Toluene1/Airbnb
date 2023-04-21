import React, { useState, useEffect, useContext } from "react";
import "./AirbnbHome.css";
import Airbnblogo from "../../assets/airbnb-logo.png";
import Airbnbsetup from "../../assets/airbnb-setup.webp";
import Airbnbsetup2 from "../../assets/airbnbsetup2.webp";
import divScroll1 from "../../assets/divScroll1.webp";
import divScroll2 from "../../assets/divScroll2.webp";
import divScroll3 from "../../assets/divSxroll3.webp";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

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
        <div className="divTextCover gap-2">
          <div className="divTexts">
            <p className="fw-bold">One-to-one guidance from a Superhost</p>
            <p style={{ marginTop: "-10px" }}>
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </p>
          </div>
          <div className="divTexts">
            <p className="fw-bold">One-to-one guidance from a Superhost</p>
            <p style={{ marginTop: "-10px" }}>
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </p>
          </div>
          <div className="divTexts">
            <p className="fw-bold">One-to-one guidance from a Superhost</p>
            <p style={{ marginTop: "-10px" }}>
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="airbnbText mt-5 ">
          Introducing Airbnb-friendly apartments
        </h2>
        <div className="divFriendlyApart gap-2">
          <div className="divScroll">
            <img src={divScroll1} alt="" className="imageScroll" />
            <div className="text-center mt-2">
              <p className="fw-bold" style={{ fontSize: "12px" }}>
                park-12 Apartments
              </p>
              <p style={{ fontSize: "12px", marginTop: "-18px" }}>
                San Diego, Carlifonia
              </p>
            </div>
          </div>
          <div className="divScroll gap-2">
            <img src={divScroll2} alt="" className="imageScroll" />
            <div className="text-center mt-2">
              <p className="fw-bold" style={{ fontSize: "12px" }}>
                Old Town Apartments
              </p>
              <p style={{ fontSize: "12px", marginTop: "-18px" }}>
                Scottsdale, Arizona
              </p>
            </div>
          </div>
          <div className="divScroll">
            <img src={divScroll3} alt="" className="imageScroll" />
            <div className="text-center mt-2">
              <p className="fw-bold" style={{ fontSize: "12px" }}>
                525 Olive Apartments
              </p>
              <p style={{ fontSize: "12px", marginTop: "-18px" }}>
                San Diego, California
              </p>
            </div>
          </div>
        </div>
      </section>
      <main className="footer">
        <footer>
          <div>
            <h6>Support</h6>
            <p>Help Center</p>
            <p>Air cover</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Report a neighborhood concern</p>
          </div>{" "}
          <div>
            <h6>Community</h6>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Combating discrimination</p>
          </div>{" "}
          <div>
            <h6>Hosting</h6>
            <p>Airbnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
            <p>Airbnb-friendly apartments</p>
          </div>
          <div>
            <h6>Airbnb</h6>
            <p>Learn about new features</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>carrers</p>
            <p>investors</p>
            <p>Gift-card</p>
          </div>
        </footer>
        <hr />

        <main className="copyright">
          <div>
            <p>
              {" "}
              <FaRegCopyright />
            </p>
            <p>Airbnb,</p>
            <p>Inc.</p>
            <p> . </p>
            <p>Terms . </p>
            <p> site map . </p>
            <p>Privacy . </p>
            <p>Your Privacy choices</p>
          </div>
          <div className="icon">
            <p>
              <TbWorld />
            </p>
            <p>English (US) </p>
            <p>$</p>
            <p>USD</p>
            <p>
              {" "}
              <AiFillFacebook className="fs-5" />{" "}
            </p>
            <p>
              <AiOutlineInstagram className="text-dark fs-5" />
            </p>
            <p>
              {" "}
              <AiFillTwitterSquare className="fs-5" />
            </p>
          </div>
        </main>
      </main>
    </main>
  );
}

export default AirbnbHome;
