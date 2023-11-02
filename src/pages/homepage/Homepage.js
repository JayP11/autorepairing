import React from "react";
import HomeHero from "../../components/home_hero/HomeHero";
import Services from "../../components/services/Services";
import HowWeWork from "../../components/how_we_work/HowWeWork";
import BookNowHero from "../../components/book_now_hero/BookNowHero";
import LeadingBrands from "../../components/leading_brands/LeadingBrands";
import ContactUsHome from "../../components/contact_us_home/ContactUsHome";
import WhyChooseUsHome from "../../components/why_choose_us_home/WhyChooseUsHome";
import WorkingSteps from "../../components/working_steps/WorkingSteps";
import IntegratedPaymentHome from "../../components/integrated_payment_home/IntegratedPaymentHome";
import VehicleInspection from "../../components/vehicle_inspection/VehicleInspection";
import RealTimeReportingHome from "../../components/real_time_reporting_home/RealTimeReportingHome";
import MultishopHome from "../../components/multishop_home/MultishopHome";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <Services />
      <WhyChooseUsHome />
      <WorkingSteps />
      <IntegratedPaymentHome />
      <VehicleInspection />
      <RealTimeReportingHome />
      <MultishopHome />
      {/* <HowWeWork /> */}
      <BookNowHero />
      <LeadingBrands />
      <ContactUsHome />
    </>
  );
};

export default Homepage;
