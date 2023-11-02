import React, { useState } from "react";
import "./Navbar.css";
import { MdCall } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
      <div className="Navbar_main">
        <div className="nav_logo_main">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--color-black" }}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="contact_details">
          <div className="contact_call_main">
            <div className="phcall_icon">
              <MdCall />
            </div>
            <div>
              <div className="callusnow">
                <h5>Call us now</h5>
              </div>
              <div className="phno">
                <p>+61 3 8376 6284</p>
              </div>
            </div>
          </div>
          <div className="hours_call_main">
            <div className="clock_icon">
              <HiClock />
            </div>
            <div>
              <div className="openinghours">
                <h5>OPENING HOURS</h5>
              </div>
              <div className="time">
                <p>Mon- Sat : 6 am - 8 pm</p>
              </div>
            </div>
          </div>
          <div>
            <button className="button nav-Login-btn">Login</button>
          </div>
          <div>
            <button className="button demo-btn">
              <BsFillCalendarCheckFill />
              Schedule demo
            </button>
          </div>
        </div>
        {toggleMenu === false ? (
          <GiHamburgerMenu
            className="side_icon"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <RiCloseFill
            className="side_icon"
            onClick={() => setToggleMenu(false)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="sidebar_main_wrapp">
          <div className="sidebar_base_wrapp">
            <div className="contact_call_main">
              <div className="phcall_icon">
                <MdCall />
              </div>
              <div>
                <div className="callusnow">
                  <h5>Call us now</h5>
                </div>
                <div className="phno">
                  <p>+61 3 8376 6284</p>
                </div>
              </div>
            </div>
            <div className="hours_call_main">
              <div className="clock_icon">
                <HiClock />
              </div>
              <div>
                <div className="openinghours">
                  <h5>OPENING HOURS</h5>
                </div>
                <div className="time">
                  <p>Mon- Sat : 6 am - 8 pm</p>
                </div>
              </div>
            </div>
            <div>
              <button className="button demo-btn">
                <BsFillCalendarCheckFill />
                Schedule demo
              </button>
            </div>
            <div>
              <button className="button nav-Login-btn">Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
