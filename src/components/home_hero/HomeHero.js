import React, { useState } from "react";
import "./HomeHero.css";
import images from "../../constants/images";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import { FcCalendar } from "react-icons/fc";
import { GiCarWheel } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { BsClipboardHeart } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
 import { FaSearch } from "react-icons/fa";
const HomeHero = () => {
  const [pincode, setPincode] = useState();
  const [faqData, setFaqData] = useState([
    {
      // id: 1,
      icon: <FcCalendar />,
      question: "Request Appointment",
      answer: "Find our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <GiCarWheel />,
      question: "Shop for Tires",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <BiSolidOffer />,
      question: "Get Coupons & Offers",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <BsClipboardHeart />,
      question: "Get a Repair Estimate",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "0px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    alert("Please fill the pin code.");
  };
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${images.heroimg})`,
          backgroundSize: "cover",
          height: "85vh",
          // backgroundPosition: "inherit",
          // backdropFilter: "blur(2px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0,0,0,.503)",
            color: "var(--color-white)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}>
          <div className="hero_content">
            <div className="head_hero">
              <h1 style={{ fontSize: "40px" }}>
                Find The Best Service For Your Car
              </h1>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <p>We offer guaranteed upfront pricing and savings up to 30%</p>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <button className="button btn_booknow_hero" onClick={setIsOpen}>
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}>
        <div className="model_sizing">
          <div className="content_box_main">
            <div>
              <h2>Looking tires and auto repair services? Start here:</h2>
            </div>
            <div className="faq_services_main">
              {faqData.map((item, index) => (
                <div key={item.id} className="faq_services_inner">
                  <div
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}>
                    <div className="icon_main">{item.icon}</div>
                    <div className="faq-question-div">
                      <h3>{item.question}</h3>
                      <span className="plus_minus_span">
                        {expanded === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </div>
                  </div>
                  {expanded === index && (
                    <>
                      <p className="faq-answer">{item.answer}</p>
                      <p className="faq-answer">{item.location_title}</p>

                      <p
                        className=""
                        style={{
                          display: "flex",
                          borderRadius: "0px",
                        }}>
                        {item.location}
                        <div className="react_icon_search">
                          {pincode === "" ||
                          pincode === undefined ||
                          pincode == null ? (
                            <Link to="" onClick={handleClick}>
                              <FaSearch
                                style={{
                                  fontSize: "20px",
                                  padding: "3px",
                                  display: "flex",
                                  color: "#fff",
                                }}
                              />
                            </Link>
                          ) : (
                            <Link to="/Searchstores">
                              <FaSearch
                                style={{
                                  fontSize: "20px",
                                  padding: "3px",
                                  display: "flex",
                                  color: "#fff",
                                }}
                              />
                            </Link>
                          )}
                        </div>
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default HomeHero;
