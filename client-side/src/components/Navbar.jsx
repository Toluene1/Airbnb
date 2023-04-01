import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <nav className=" navMain p-0  shadow">
      {/* <Link to={"/"}>home</Link>
      <Link to={"/login"} className="mx-4">
        login
      </Link>
      <Link to={"/Auth"}>auth route</Link> */}
      <section className="divMain">
        <div className="navDiv1 ">
          <Link to={"/"} className="text-decoration-none">
            <img
              src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
              alt=""
              className="imageDiv1"
            />
          </Link>
        </div>
        <div className="navDiv2 text-center">
          <button className="div2Button1">Anywhere</button>
          <button className="div2Button2">Any Week</button>
          <button className="div2Button3">
            <span className="anyGuest">Any guest</span>
            <AiOutlineSearch className="iconButton" />
          </button>
        </div>
        <div className="navDiv3 text-start">
          <div className=" airHome">
            <Link to={"/"} className="text-decoration-none text-dark">
              {" "}
              Airbnb your home
            </Link>
            <TbWorld className="tbIcon" />
          </div>
          <div>
            <Dropdown className=" dropdownStyle">
              {/* <Dropdown.Toggle
                // className="text-white"
                variant="transparent"
                id="dropdown-basic"
              >
               
              </Dropdown.Toggle> */}
              <Dropdown.Toggle
                variant="transparent"
                className="text-white"
                id="dropdown-basic"
              >
                <button className="userButton">
                  <FaBars />
                  <FaUserCircle className="iconAvatar" />
                </button>{" "}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownNav" align="end" flip={"true"}>
                <Dropdown.Item href="#/action-1" className="itemDrop">
                  <b>Log in</b>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="itemDrop">
                  Sign Up
                </Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-3" className="itemDrop">
                  Airbnb your home
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="itemDrop">
                  Host an experience
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="itemDrop">
                  Help
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
