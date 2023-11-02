import React from "react";
import "./BookNowHero.css";
import images from "../../constants/images";

const BookNowHero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images.book_now})`,
        backgroundSize: "cover",
        height: "85vh",
        // backgroundPosition: "inherit",
        // backdropFilter: "blur(2px)",
        // width: "100vw",
        // display: "flex",
        // alignItems: "center",
      }}>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.503)",
          color: "var(--color-white)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}>
        <div className="title_main">
          <div>
            <h1>WHY NOT GET YOUR MOT DONE WITH US?</h1>
          </div>
          <div>
            <h5
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              Only £19 with a service or £24 without a service.
            </h5>
            <h5
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              Free nationwide collection and delivery.
            </h5>
          </div>
          <div>
            <button className="button_booknow">Contact now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowHero;
