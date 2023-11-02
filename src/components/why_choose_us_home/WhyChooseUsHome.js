import React from "react";
import "./WhyChooseUsHome.css";
import images from "../../constants/images";

const WhyChooseUsHome = () => {
  return (
    <div style={{ background: "var(--color-whitespmoke)" }}>
      <div className="WhyChooseUsHome_main">
        <div className="heading_sec_WhyChooseUsHome_main">
          <div>
            <h1 className="whychooseustitle">WHY CHOOSE US</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "5rem" }}>
          <div className="box_content_sec1">
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose">Integrity</h3>
              </div>
              <div className="box_para">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose">Collaboration</h3>
              </div>
              <div className="box_para">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose">Result Orientation</h3>
              </div>
              <div className="box_para">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
          <div style={{ height: "100%", transform: "translateY(80px)" }}>
            <div
              style={{ backgroundColor: "var(--color-brown", height: "500px" }}>
              <img
                src={images.man}
                alt=""
                style={{ transform: "translateY(-77px)" }}
              />
            </div>
          </div>
          <div className="box_content_sec3">
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose2">Respect</h3>
              </div>
              <div className="box_para2">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose2">Ennovation</h3>
              </div>
              <div className="box_para2">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <div className="box_content_whychoose">
              <div>
                <h3 className="title_whychoose2">Experienced</h3>
              </div>
              <div className="box_para2">
                <p>
                  Vestibulum laoreet libero vitae semper vehicula. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHome;
