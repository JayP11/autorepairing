import React, { useEffect } from "react";
import images from "../../constants/images";
import "./AppointmentHero.css";
import { useLocation } from "react-router-dom";
const AppointmentHero = () => {
  const location = useLocation();

  useEffect(() => {}, []);
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images.appointment_hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        className="imagehero_main"
        style={{
          backgroundColor: "rgb(0 0 0 / 50%)",
          //   backgroundColor: "rgba(0,0,0,.503)",
          color: "var(--color-white)",
        }}>
        <h1 className="hero_headinf_appo">REQUEST APPOINTMENT</h1>
        <h1 className="hero_headinf_appo_storename">
          {location.state.item.Storename}
        </h1>
      </div>
    </div>
  );
};

export default AppointmentHero;
