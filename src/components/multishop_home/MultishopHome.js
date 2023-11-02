import React from "react";
import images from "../../constants/images";
import { FiArrowUpRight } from "react-icons/fi";
import "./MultishopHome.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const MultishopHome = () => {
  return (
    <div className="MultishopHome_main">
      <AnimationOnScroll
        animateIn="fadeInDown"
        animateOut="animate__bounceOutDown">
        <div className="MultishopHome_image">
          <img
            src={images.multishop}
            alt=""
            style={{ height: "100%", width: "100%", borderRadius: "7px" }}
          />
        </div>
      </AnimationOnScroll>
      <div className="MultishopHome_inner">
        <div>
          <h1>MULTI-SHOP</h1>
        </div>
        <div
          style={{
            height: "4px",
            backgroundColor: "var(--color-brown)",
            width: "200px",
          }}></div>

        <div>
          <p style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
            Have everything you need to manage all your shops in one place from
            wherever you are.
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

export default MultishopHome;
