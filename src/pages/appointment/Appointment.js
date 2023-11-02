import React, { useEffect } from "react";
import AppointmentHero from "../../components/appointment_hero/AppointmentHero";
import AppointmentForm from "../../components/appointment_form/AppointmentForm";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();
  
  useEffect(() => {
    // console.log("===>",location.state.item);
  },[])

  return (
    <div>
      <AppointmentHero />
      <AppointmentForm/>
    </div>
  );
};

export default Appointment;
