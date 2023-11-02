import React from "react";
import "./LeadingBrands.css";
import Slider from "react-slick";
import images from "../../constants/images";

const LeadingBrands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ background: "var(--color-whitespmoke)", width: "100%" }}>
      <section className="sec_brand_main">
        <div className="feature-head-part">
          <div className="">
            <h1 className="sec_title_leadingbrand">
              WE ONLY USE LEADING BRAND
            </h1>
          </div>
        </div>
        <Slider {...settings}>
          <div className="company_img_main">
            <img src={images.jio_mart} alt="" className="company-img" />
          </div>
          <div className="company_img_main">
            <img src={images.star_bazzar} alt="" className="company-img" />
          </div>
          <div className="company_img_main">
            <img src={images.bigbasket} alt="" className="company-img" />
          </div>
          <div className="company_img_main">
            <img src={images.amazon} alt="" className="company-img" />
          </div>
          <div className="company_img_main">
            <img src={images.bigbasket} alt="" className="company-img" />
          </div>
          <div className="company_img_main">
            <img src={images.amazon} alt="" className="company-img" />
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default LeadingBrands;
