import React from "react";
import "./WorkingSteps.css";
import images from "../../constants/images";

const WorkingSteps = () => {
  return (
    <div className="WorkingSteps_main">
      <div
        style={{
          // height: "500px",
          // width: "900px",
          position: "relative",
        }}>
         <img
          src={images.Dashboard}
          alt=""
          className="dash_image"
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            // backgroundColor:"#fff",
             width: "100%",
            height: "175px",
          }}></div>
      </div>
      <div className="garageicon_heading" style={{}}>
        <img src={images.garage_icon} alt="" className="garage_icon_image" />
          <h1 className="headinggarageh1">
          YOUR NEW FAVORITE TECHNICIAN IN THE CLOUD
        </h1>
        <div
          style={{
            height: "4px",
            backgroundColor: "var(--color-brown)",
            width: "350px",
          }}></div>
        <p
          style={{
            letterSpacing: "1px",
            textAlign: "center",
            lineHeight: "2",
          }}>
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
