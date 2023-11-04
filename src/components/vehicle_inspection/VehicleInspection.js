import React from "react";
import images from "../../constants/images";
import { FiArrowUpRight } from "react-icons/fi";
import "./VehicleInspection.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const VehicleInspection = () => {
  return (
    <div className="VehicleInspection_main">
      <AnimationOnScroll
        animateIn="fadeInDown"
        animateOut="animate__bounceOutDown"
        style={{ maxWidth: "40%" }}>
        <div className="">
          <img
            src={images.vehicle_inspection}
            alt=""
            className="VehicleInspection_image"
          />
        </div>
      </AnimationOnScroll>
      <div className="VehicleInspection_main_inner" style={{ maxWidth: "60%" }}>
        <div>
          <h1>DIGITAL VEHICLE INSPECTIONS</h1>
        </div>
        <div
          style={{
            height: "4px",
            backgroundColor: "var(--color-brown)",
            width: "200px",
          }}></div>

        <div>
          <p style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
            Digital vehicle inspections allow customers to get a comprehensive
            overview of the condition of their vehicle without having to visit
            your shop.
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleInspection;
