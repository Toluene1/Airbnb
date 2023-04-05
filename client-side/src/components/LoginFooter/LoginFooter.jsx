import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginFooter.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle, BiMessageAlt } from "react-icons/bi";
import { FaAirbnb } from "react-icons/fa";
import { Context } from "../../Provider/Context";

function LoginFooter(params) {
  const { Loggedin } = useContext(Context);
  return (
    <section>
      <div className="footerDivMain ">
        {Loggedin ? (
          <section>
            <div className="footerDiv2 text-dark text-center">
              {/* <Link to={"/"} className="text-decoration-none "> */}
              <div className=" divWithin ">
                <AiOutlineSearch className="iconFooter" /> <br />
                <span className="textFooter">Explore</span>
              </div>
              {/* </Link> */}
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
                <BiUserCircle className="iconFooter" /> <br />
                <span className="textFooter">profile</span>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="footerDiv1 text-dark text-center ">
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
              <div className=" divWithin ">
                <BiUserCircle className="iconFooter" /> <br />
                <span className="textFooter">login</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default LoginFooter;
