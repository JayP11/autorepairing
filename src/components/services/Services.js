import React from "react";
import "./Services.css";
import { BsBatteryCharging, BsFuelPumpFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Services = () => {
  return (
    <div className="services_main">
      <div className="services_boxes">
        <div className="batteryicon">
          <BsBatteryCharging />
        </div>
        <div className="">
          <h3 className="heading_service">BATTERY AND ENGINE RESTORE</h3>
        </div>
        <div className="services_para">
          <p>
            All of our virtual professionals are highly experienced in the areas
            in which they work and have been through a thorough recruitment
            process.
          </p>
        </div>
      </div>
      <div className="services_boxes">
        <div className="pumpicon">
          <BsFuelPumpFill />
        </div>
        <div className="">
          <h3 className="heading_service">CAR LIQUIDS REPLACEMENT</h3>
        </div>
        <div className="services_para">
          <p>
            Using the outcomes from the Company Analysis, we will put together a
            plan for the most effective marketing strategy to get the best
            results.
          </p>
        </div>
      </div>
      <div className="services_boxes">
        <div className="hearticon">
          <AiOutlineHeart />
        </div>
        <div className="">
          <h3 className="heading_service">YEARLY WEATHER INSPECTION</h3>
        </div>
        <div className="services_para">
          <p>
            We will put together a detailed and specific style guide that covers
            all areas of your brand to ensure that anything produced in the
            future is on brand.
          </p>
        </div>
      </div>
      <div className="services_boxes">
        <div className="batteryicon">
          <BsBatteryCharging />
        </div>
        <div className="">
          <h3 className="heading_service">ELECTRIC CAR LOADING</h3>
        </div>
        <div className="services_para">
          <p>
            All of our virtual professionals are highly experienced in the areas
            in which they work and have been through a thorough recruitment
            process.
          </p>
        </div>
      </div>
      <div className="services_boxes">
        <div className="pumpicon">
          <BsFuelPumpFill />
        </div>
        <div className="">
          <h3 className="heading_service">RESTART AND REPAIR SERVICE</h3>
        </div>
        <div className="services_para">
          <p>
            Using the outcomes from the Company Analysis, we will put together a
            plan for the most effective marketing strategy to get the best
            results.
          </p>
        </div>
      </div>
      <div className="services_boxes">
        <div className="hearticon">
          <AiOutlineHeart />
        </div>
        <div className="">
          <h3 className="heading_service">SPEED AND ENGINE TESTING</h3>
        </div>
        <div className="services_para">
          <p>
            We will put together a detailed and specific style guide that covers
            all areas of your brand to ensure that anything produced in the
            future is on brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
