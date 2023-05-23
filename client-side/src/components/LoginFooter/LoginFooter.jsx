import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginFooter.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle, BiMessageAlt } from "react-icons/bi";
import { FaAirbnb } from "react-icons/fa";
import { Context } from "../../Provider/Context";
import PopModal from "../SignUp";

function LoginFooter() {
  const { Loggedin, modalShow, setModalShow, activeButton, setActiveButton } =
    useContext(Context);
  const [showfooter, setshowfooter] = useState(true);
  const [previouScrollPosition, setpreviousScrollPosition] = useState(
    window.scrollY,
  );

  const handleFooter = () => {
    const currentscrollposition = window.scrollY;
    setpreviousScrollPosition(window.scrollY);
    if (currentscrollposition >= previouScrollPosition) {
      setshowfooter(true);
    } else {
      setshowfooter(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("active", JSON.stringify(activeButton));
  }, [activeButton]);
  const clickedIconHandler = (e) => {
    setActiveButton(e.currentTarget.id);
    localStorage.setItem("active", JSON.stringify(e.currentTarget.id));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFooter);
    return () => {
      window.removeEventListener("scroll", handleFooter);
    };
  }, [window.scrollY]);
  return (
    <>
      {showfooter && (
        <div className="footerDivMain animate__animated animate__fadeInUp ">
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
                </div>

                <div
                  className=" divWithin "
                  id="second"
                  onClick={clickedIconHandler}
                >
                  <Link to={"/wishlist"}>
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
                  </Link>
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
                      activeButton === "third" ? `text-dark` : ""
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
                      activeButton === "fourth" ? `text-dank` : ""
                    }`}
                  >
                    Inbox
                  </div>
                </div>
                <div
                  className=" divWithin"
                  id="fifth"
                  onClick={clickedIconHandler}
                >
                  <Link
                    to={"/Accounts"}
                    className="text-decoration-none text-dark"
                  >
                    <BiUserCircle
                      className={`iconFooter ${
                        activeButton === "fifth" ? `text-danger` : ""
                      }`}
                    />
                    <div
                      className={`textFooter ${
                        activeButton === "fifth" ? `text-dark` : ""
                      }`}
                    >
                      profile
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          ) : (
            <section className="bg-white">
              <div className="footerDiv1 text-dark text-center  bg-white">
                <div
                  className=" divWithin "
                  id="first"
                  onClick={clickedIconHandler}
                >
                  <Link to={"/"} className="text-decoration-none ">
                    <AiOutlineSearch
                      className={`iconFooter ${
                        activeButton === "first" ? "text-danger" : ""
                      }`}
                    />
                    <div
                      className={`textFooter ${
                        activeButton === "first" ? "text-danger" : ""
                      }`}
                    >
                      Explore
                    </div>
                  </Link>
                </div>
                <Link to={"/wishlist"}>
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
                </Link>
                <div
                  className=" divWithin "
                  id="eight"
                  onClick={clickedIconHandler}
                >
                  <div
                    onClick={() => {
                      setModalShow(true);
                    }}
                  >
                    <BiUserCircle
                      className={`iconFooter ${
                        activeButton === "eight" ? `text-danger` : ""
                      }`}
                    />
                    <div
                      className={`textFooter ${
                        activeButton === "eight" ? `text-dark` : ""
                      }`}
                    >
                      login
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default LoginFooter;
