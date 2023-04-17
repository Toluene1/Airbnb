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
    window.addEventListener("scroll", handleFooter);
    return () => {
      window.removeEventListener("scroll", handleFooter);
    };
  }, [window.scrollY]);
  return (
    <>
      {showfooter && (
        <div className="footerDivMai animate__animated animate__fadeInUp ">
          {Loggedin ? (
            <section>
              <div className="footerDiv2 text-dark text-center">
                <Link to={"/"} className="text-decoration-none ">
                  <div className=" divWithin ">
                    <AiOutlineSearch className="iconFooter" /> <br />
                    <span className="textFooter">Explore</span>
                  </div>
                </Link>
                <div className=" divWithin ">
                  <AiOutlineHeart className="iconFooter" /> <br />
                  <span className="textFooter">Wishlists</span>
                </div>
                <div className=" divWithin ">
                  <FaAirbnb className="iconFooter" /> <br />
                  <span className="textFooter">Trips</span>
                </div>
                <div className=" divWithin ">
                  <BiMessageAlt className="iconFooter" /> <br />
                  <span className="textFooter">Inbox</span>
                </div>
                <div className=" divWithin ">
                  <Link
                    to={"/Accounts"}
                    className="text-decoration-none text-dark"
                  >
                    <BiUserCircle className="iconFooter" /> <br />
                    <span className="textFooter">profile</span>
                  </Link>
                </div>
              </div>
            </section>
          ) : (
            <section className="bg-white">
              <div className="footerDiv1 text-dark text-center  bg-white">
                {/* <Link to={"/"} className="text-decoration-none "> */}
                <div className=" divWithin ">
                  <AiOutlineSearch className="iconFooter" /> <br />
                  <span className="textFooter">Explore1</span>
                </div>
                {/* </Link> */}
                <div className=" divWithin ">
                  <AiOutlineHeart className="iconFooter" /> <br />
                  <span className="textFooter">Wishlists</span>
                </div>
                <div className=" divWithin " onClick={() => setModalShow(true)}>
                  <BiUserCircle className="iconFooter" /> <br />
                  <span className="textFooter">login</span>
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
