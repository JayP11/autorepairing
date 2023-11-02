import React from "react";
import "./WorkingSteps.css";
import images from "../../constants/images";

const WorkingSteps = () => {
  return (
    <div className="WorkingSteps_main">
      <div
        style={{
          height: "500px",
          width: "900px",
        }}>
        {/* <div className="div-block-42"></div> */}
        <img src={images.Dashboard} alt="" className="dash_image" />
      </div>

      <div className="garageicon_heading">
        <img src={images.garage_icon} alt="" className="garage_icon_image" />
        {/* <img src={images.chain} alt="" className="garage_icon_image" /> */}
        <h1>YOUR NEW FAVORITE TECHNICIAN IN THE CLOUD</h1>
        <div
          style={{
            height: "4px",
            backgroundColor: "var(--color-brown)",
            width: "500px",
          }}></div>
        <p style={{ letterSpacing: "1px", textAlign: "center",lineHeight:"2" }}>
          Auto repairing is the process of fixing and maintaining vehicles. It
          can include a wide range of tasks, from simple oil changes and tire
          rotations to more complex repairs, such as engine replacements and
          transmission overhauls. Auto repair shops employ a variety of skilled
          technicians who have the knowledge and experience to diagnose and
          repair problems with vehicles.
        </p>
      </div>
    </div>
  );
};

export default WorkingSteps;
