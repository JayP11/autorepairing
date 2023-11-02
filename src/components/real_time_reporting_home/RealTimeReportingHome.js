import React from "react";
import "./RealTimeReportingHome.css";
import images from "../../constants/images";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimationOnScroll } from "react-animation-on-scroll";

const RealTimeReportingHome = () => {
  return (
    <div className="RealTimeReportingHome_main">
      <div className="RealTimeReportingHome_inner">
        <div>
          <h1>REAL-TIME REPORTING</h1>
        </div>
        <div
          style={{
            height: "4px",
            backgroundColor: "var(--color-brown)",
            width: "200px",
          }}></div>
        <div></div>
        <div>
          <p style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
            Quickly be able to see the overall health of your vehicle from
            anywhere to be able to make informed decisions.
          </p>
        </div>
        <div>
          <button
            className="button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}>
            Learn more
            <FiArrowUpRight
              style={{
                fontSize: "20px",
              }}
            />
          </button>{" "}
        </div>
      </div>
      <AnimationOnScroll
        animateIn="fadeInDown"
        animateOut="animate__bounceOutDown">
        <div className="RealTimeReportingHome_image">
          <img
            src={images.reporting}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default RealTimeReportingHome;
