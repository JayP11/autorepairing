import React, { useState } from "react";
import "./StoresNearYou.css";
import { BiCurrentLocation } from "react-icons/bi";
import ReactModal from "react-modal";
import { MdCall, MdTimer, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const StoresNearYou = () => {
  const data = [
    {
      Storename: "CARROLLTON, TX",
      location: `2621 Midway Road Carrollton, TX 75006`,
      shopdistance: "10 mi",
      Phone: "972-616-4069",
      Sunday: " Closed",
      Monday: " 7:30AM - 6:00PM",
      Tuesday: " 7:30AM - 6:00PM",
      Wednesday: " 7:30AM - 6:00PM",
      Thursday: " 7:30AM - 6:00PM",
      Friday: " 7:30AM - 6:00PM",
      Saturday: " 7:30AM - 6:00PM",
    },
    {
      Storename: "Maharastra",
      location: "Mumbai",
      shopdistance: "5 mi",
      Phone: "972-616-4069",
      Sunday: " Closed",
      Monday: " 7:30AM - 6:00PM",
      Tuesday: " 7:30AM - 6:00PM",
      Wednesday: " 7:30AM - 6:00PM",
      Thursday: " 7:30AM - 6:00PM",
      Friday: " 7:30AM - 6:00PM",
      Saturday: " 7:30AM - 6:00PM",
    },
    {
      Storename: "Gujarat",
      location: "Lucknow",
      shopdistance: "2 mi",
      Phone: "972-616-4069",
      Sunday: " Closed",
      Monday: " 7:30AM - 6:00PM",
      Tuesday: " 7:30AM - 6:00PM",
      Wednesday: " 7:30AM - 6:00PM",
      Thursday: " 7:30AM - 6:00PM",
      Friday: " 7:30AM - 6:00PM",
      Saturday: " 7:30AM - 6:00PM",
    },
  ];

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [getData, setData] = useState({});

  return (
    <>
      <div className="StoresNearYou_main">
        <div className="StoresNearYou_head">
          <h1 className="store_head">Auto STORES</h1>
          <h2>Near 75001 (Change)</h2>
          <hr style={{ border: "1px solid gray", width: "90%" }} />

          <div className="store_detials_full">
            {data.map((item, index) => (
              <div key={index} className="store_details_main">
                <div className="store_details_inner">
                  <div>
                    <h1>{item.Storename}</h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}>
                    <BiCurrentLocation style={{ fontSize: "20px" }} />
                    <h3>{item.shopdistance}</h3>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "20px" }}>{item.location}</p>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "20px" }}>Get Direction</p>
                  </div>
                  <h3>|</h3>
                  <div>
                    <p
                      onClick={() => {
                        setData(item);
                        setModalIsOpen(true);
                      }}
                      style={{ fontSize: "20px", cursor: "pointer" }}>
                      View Details
                    </p>
                  </div>
                </div>
                <div>
                  <Link to="/AppointmentForm">
                    <Link
                      className="button btn_stores"
                      key={index}
                      to={`/AppointmentForm`}
                      state={{
                        item: item,
                      }}>
                      Request Appointment Online
                    </Link>
                  </Link>
                </div>
                <div style={{ display: "flex" }}>
                  <hr
                    style={{
                      border: "1px solid var(--color-black)",
                      width: "90%",
                      height: "1px",
                      transform: "translateY(10px)",
                    }}
                  />
                  <p style={{ padding: "0 1.5rem", fontSize: "20px" }}>OR</p>
                  <hr
                    style={{
                      border: "1px solid var(--color-black)",
                      width: "90%",
                      height: "1px",
                      transform: "translateY(10px)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      display: "flex",
                      gap: "0.5rem",
                    }}>
                    Call <h4>{item.Phone}</h4>to schedule an appointment
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <div
          className="model_sizing"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="modal_storename">
            <h1>{getData.Storename}</h1>
            <MdOutlineClose
              // onClick={setModalIsOpen(false)}
              style={{
                fontSize: "33px",
                color: "indianred",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="location_and_shopdistance">
            <p style={{ fontSize: "20px", fontWeight: "400" }}>
              {getData.location}
            </p>
            <p className="location_p_storenearyou">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              {getData.shopdistance}
            </p>
          </div>
          <div>
            <h3 className="modal_phone">
              <MdCall />
              {getData.Phone}
            </h3>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "20px" }}>Change Store</p>
            </div>
            <h3>|</h3>
            <div>
              <p style={{ fontSize: "20px", cursor: "pointer" }}>Direction</p>
            </div>
          </div>
          <div className="days_data_main">
            <MdTimer style={{ fontSize: "20px" }} />
            <div className="days_data">
              <div>Monday : {getData.Monday}</div>
              <div>Tuesday : {getData.Tuesday}</div>
              <div>Wednesday : {getData.Wednesday}</div>
              <div>Thursday : {getData.Thursday}</div>
              <div>Friday : {getData.Friday}</div>
              <div>Saturday : {getData.Saturday}</div>
              <div>Sunday : {getData.Sunday}</div>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default StoresNearYou;
