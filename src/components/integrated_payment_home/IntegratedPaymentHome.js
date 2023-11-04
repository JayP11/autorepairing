import React from "react";
import "./IntegratedPaymentHome.css";
import { FiArrowUpRight } from "react-icons/fi";
import images from "../../constants/images";
import "./IntegratedPaymentHome.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import { AnimationOnScroll } from "react-animation-on-scroll";

const IntegratedPaymentHome = () => {
  return (
    <div className="IntegratedPaymentHome_main">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOut="animate__bounceOut"
        style={{ maxWidth: "60%" }}>
        <div className="IntegratedPaymentcontent_inner">
          <div>
            <h1>INTEGRATED PAYMENT PROCESSING</h1>
          </div>
          <div
            style={{
              height: "4px",
              backgroundColor: "var(--color-brown)",
              width: "200px",
            }}></div>
          <div>
            <p style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
              Integrated payment processing is a system that allows your auto
              repair company to accept and process payments from customers in a
              seamless and efficient way.
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
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInDown"
        animateOut="animate__bounceOutDown"
        style={{ maxWidth: "40%" }}>
        <div className="IntegratedPaymentcontent_image">
          <img
            src={images.paying}
            alt=""
            className="IntegratedPaymentcontent_image_inner"
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default IntegratedPaymentHome;
