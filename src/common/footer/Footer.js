import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_main1">
      <div className="footer_main">
        <div className="footer_box1">
          <div className="headings">
            <h3>ABOUT US</h3>
          </div>
          <div className="aboutuspara">
            <p>
              Praesent massa felis, mattis et tempor non, condimentum vel
              lectus. in turpis leo. vestibulum a sagittis iaculis convallis sit
              amet purus. sed lacinia elit in dui imperdiet pottitor
            </p>
          </div>
        </div>
        <div className="footer_box2">
          <div className="headings">
            <h3>CAR SERVICE</h3>
          </div>
          <div className="links_sec1">
            <Link to="/" className="link_inner">
              Audi service
            </Link>
            <Link to="/" className="link_inner">
              BMW service
            </Link>
            <Link to="/" className="link_inner">
              Citroen service
            </Link>
            <Link to="/" className="link_inner">
              Daewoo service
            </Link>
          </div>
        </div>
        <div className="footer_box3">
          <div className="headings">
            <h3>USEFUL INFORMATION</h3>
          </div>
          <div className="links_sec2">
            <Link to="/" className="link_inner">
              MOT
            </Link>
            <Link to="/" className="link_inner">
              About us
            </Link>
            <Link to="/" className="link_inner">
              How it works
            </Link>
            <Link to="/" className="link_inner">
              FAQ's
            </Link>
          </div>
        </div>
        <div className="footer_box4">
          <div className="headings">
            <h3>USEFUL SEARCHES</h3>
          </div>
          <div className="links_sec3">
            <Link to="/" className="link_inner">
              Car MOT
            </Link>
            <Link to="/" className="link_inner">
              Car repair
            </Link>
            <Link to="/" className="link_inner">
              Car parts
            </Link>
            <Link to="/" className="link_inner">
              Car servicing
            </Link>
          </div>
        </div>
      </div>
      <br />
      <hr style={{border:"1px solid gray"}} />
      <br />
      <div className="last_sec">
        <div className="rights_reserved">
          <p>© 2023 All Rights Reserved</p>
        </div>
        <div className="socialicons">
          <FaFacebook className="socialicons_inner" />
          <FaInstagram className="socialicons_inner" /> 
          <FaTwitter className="socialicons_inner" />
          <FaYoutube className="socialicons_inner" />
          <FaSkype className="socialicons_inner" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
