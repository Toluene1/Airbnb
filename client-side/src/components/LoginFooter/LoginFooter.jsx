import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginFooter.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle, BiMessageAlt } from "react-icons/bi";
import { FaAirbnb } from "react-icons/fa";
import { Context } from "../../Provider/Context";
import PopModal from "../SignUp";

function LoginFooter() {
  const { Loggedin, modalShow, setModalShow } = useContext(Context);
  const [activeButton, setActiveButton] = useState(
    localStorage.getItem("active")
      ? JSON.parse(localStorage.getItem("active"))
      : "first"
  );

  useEffect(() => {
    localStorage.setItem("active", JSON.stringify(activeButton));
  }, [activeButton]);
  const clickedIconHandler = (e) => {
    setActiveButton(e.currentTarget.id);
    localStorage.setItem("active", JSON.stringify(e.currentTarget.id));
  };

  return (
    <section className="bg-white">
      <div className="footerDivMain">
        {Loggedin ? (
          <section>
            <div className="footerDiv2 text-dark text-center">
              <div
                className=" divWithin "
                id="first"
                onClick={clickedIconHandler}
              >
                <Link to={"/"} className="text-decoration-none ">
                  <AiOutlineSearch
                    className={` ${
                      activeButton === "first" ? "iconColor" : "iconFooter"
                    }`}
                  />
                  <div
                    className={`textFooter ${
                      activeButton === "first" ? `text-dark` : ""
                    }`}
                  >
                    Explore
                  </div>
                </Link>
                <div className=" divWithin ">
                  <AiOutlineHeart className="iconFooter" /> <br />
                  <span className="textFooter">Wishlists</span>
                </div>

                <div
                  className=" divWithin "
                  id="second"
                  onClick={clickedIconHandler}
                >
                  <AiOutlineHeart
                    className={`iconFooter ${
                      activeButton === "second" ? `text-danger` : ""
                    }`}
                  />
                  <div
                    className={`textFooter ${
                      activeButton === "second" ? `text-dark` : ""
                    }`}
                  >
                    Wishlists
                  </div>
                </div>
                <div
                  className=" divWithin "
                  id="third"
                  onClick={clickedIconHandler}
                >
                  <FaAirbnb
                    className={`iconFooter ${
                      activeButton === "third" ? `text-danger` : ""
                    }`}
                  />
                  <div
                    className={`textFooter ${
                      activeButton === "third" ? `text-danger` : ""
                    }`}
                  >
                    Trips
                  </div>
                </div>
                <div
                  className=" divWithin "
                  id="fourth"
                  onClick={clickedIconHandler}
                >
                  <BiMessageAlt
                    className={`iconFooter ${
                      activeButton === "fourth" ? `text-danger` : ""
                    }`}
                  />
                  <div
                    className={`textFooter ${
                      activeButton === "fourth" ? `text-danger` : ""
                    }`}
                  >
                    Inbox
                  </div>
                </div>
                <Link to={"/Accounts"} className="text-decoration-none  ">
                  <div
                    className=" divWithin "
                    id="fifth"
                    onClick={clickedIconHandler}
                  >
                    <BiUserCircle
                      className={`iconFooter ${
                        activeButton === "fifth" ? `text-danger` : ""
                      }`}
                    />
                    <div
                      className={`textFooter ${
                        activeButton === "fifth" ? `text-danger` : ""
                      }`}
                    >
                      profile
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-white">
            <div className="footerDiv1 text-dark text-center  bg-white">
              {/* <Link to={"/"} className="text-decoration-none "> */}
              <div className=" divWithin ">
                <AiOutlineSearch className="iconFooter" />
                <div className="textFooter">Explore</div>
              </div>
              {/* </Link> */}
              <div className=" divWithin ">
                <AiOutlineHeart className="iconFooter" />
                <div className="textFooter">Wishlists</div>
              </div>
              <div className=" divWithin " onClick={() => setModalShow(true)}>
                <BiUserCircle className="iconFooter" />
                <div className="textFooter">login</div>
              </div>
            </div>
          </section>
        )}
      </div>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default LoginFooter;
