import React, { useState } from "react";
import "./AppointmentForm.css";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { useLocation } from "react-router-dom";
import { MdCall } from "react-icons/md";

const AppointmentForm = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const startYear = 2000;
  const endYear = new Date().getFullYear(); // End year of the range

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const renderYearOptions = () => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  const location = useLocation();

  /* */

  const [date, setDate] = useState(null);

  const [Steps, SetSteps] = useState(1);

  // checkboxes
  const [oilchanged, setOilChanged] = useState(false);
  const [ServicesTitle, setServicesTitle] = useState();
  const [getcon, setcon] = useState(false);
  const [TirePurchase, setTirePurchase] = useState(false);
  const [Brakes, setBrakes] = useState(false);
  const [TireServices, setTireServices] = useState(false);

  const data = [
    {
      id: 1,
      title: "Oil Change",
    },
    {
      id: 2,
      title: "Brakes",
    },
    {
      id: 3,
      title: "Tire Purchase/Installation",
    },
    {
      id: 4,
      title: "Tire Services",
    },
  ];
  return (
    <div className="AppointmentForm_main">
      <div style={{}}>
        <div className="appoin_steps_main">
          <div
            className="steps_main"
            onClick={() => {
              SetSteps(1);
            }}>
            <h3 className="numbers_steps">01</h3>
            <h3>APPOINTMENT DETAILS</h3>
          </div>

          <div
            className="steps_main"
            onClick={() => {
              SetSteps(2);
            }}>
            <h3 className="numbers_steps">02</h3>
            <h3>MY INFORMATION</h3>
          </div>

          <div
            className="steps_main"
            onClick={() => {
              SetSteps(3);
            }}>
            <h3 className="numbers_steps">03</h3>
            <h3>REVIEW & SUBMIT</h3>
          </div>
        </div>
        <hr
          style={{ border: "1px solid gray", width: "100%", marginTop: "1rem" }}
        />

        {Steps === 1 ? (
          <div className="formdata1_main">
            <div className="preferred_date">
              <div>
                <h2 style={{ fontSize: "28px" }}>Preferred Date of Request*</h2>
              </div>
              <div>
                <DtPicker
                  onChange={setDate}
                  placeholder="Please Select Date  🗓️ "
                  value={date}
                  showWeekend
                  withTime
                  autoClose={false}
                  //  clearBtn
                />
              </div>
            </div>
            <div className="preferedtime_main_app">
              <div>
                <h2 style={{ fontSize: "28px" }}>Preferred Time*</h2>
              </div>
              <div className="time_main_app" style={{ marginTop: "1.5rem" }}>
                <p style={{ fontSize: "17px" }}>10:30AM - 12:30PM</p>
              </div>
              <div className="time_main_app">
                <p style={{ fontSize: "17px" }}>12:30AM - 2:300PM</p>
              </div>
              <div className="time_main_app">
                <p style={{ fontSize: "17px" }}>2:30AM - 4:30PM</p>
              </div>
              <div className="time_main_app">
                <p style={{ fontSize: "17px" }}>4:30AM - 6:00PM</p>
              </div>
            </div>
            <div className="vehicle_drop_main">
              <div style={{ marginBottom: "0.5rem" }}>
                <h1>Vehicle Drop Off*</h1>
              </div>
              <div className="radio_main">
                <div className="radio">
                  <label className="label">
                    <input
                      type="radio"
                      name="radio_group"
                      value="option1"
                      checked={true}
                    />
                    Drop it off
                  </label>
                </div>
                <div className="radio">
                  <label className="label">
                    <input type="radio" name="radio_group" value="option2" />
                    Wait for it
                  </label>
                </div>
                <div className="radio">
                  <label className="label">
                    <input type="radio" name="radio_group" value="option3" />
                    Request Pick-up/Drop-off
                  </label>
                </div>
              </div>
              <div
                style={{
                  fontWeight: "300",
                  letterSpacing: "1px",
                }}>
                <p>
                  Pick-up/Drop-off and Courtesy Car services are subject to
                  availability. Please confirm schedule and availability with
                  the store prior to your appointment.
                </p>
              </div>
            </div>
            <div className="services_needed">
              <div>
                <h1>Service(s) Needed*</h1>
              </div>
              <div className="checkbox_main">
                <div className="checkbox">
                  {data &&
                    data.map((item, index) => {
                      return (
                        <>
                          <div className="p">
                            <label className="checkbox_label_appointment">
                              <input
                                type="checkbox"
                                name="check_group"
                                value={oilchanged}
                                // onChange={() => setOilChanged(!oilchanged)
                                onChange={() => {
                                  setServicesTitle(item.id);
                                  setcon(!getcon);
                                }}
                              />
                              {item.title}
                            </label>
                            <hr
                              style={{
                                border: "1px solid lightgray",
                                width: "90%",
                              }}
                            />
                          </div>
                          {item.id == ServicesTitle && getcon === true ? (
                            <textarea
                              id=""
                              name=""
                              rows="2"
                              placeholder="Oil Change Comments"
                              className="input_field_appointment"
                            />
                          ) : null}
                        </>
                      );
                    })}

                  {/* {oilchanged === true ? (
                    <div>
                      <textarea
                        id=""
                        name=""
                        rows="2"
                        placeholder="Oil Change Comments"
                        className="input_field_appointment"
                      />
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="checkbox">
                  <div>
                    <label className="checkbox_label_appointment">
                      <input
                        type="checkbox"
                        name="check_group"
                        value={Brakes}
                        onChange={() => setBrakes(!Brakes)}
                      />
                      Brakes
                    </label>
                  </div>
                  {Brakes === true ? (
                    <div>
                      <textarea
                        id=""
                        name=""
                        rows="2"
                        placeholder="Brakes Comments"
                        className="input_field_appointment"
                      />
                    </div>
                  ) : null}
                </div>
 
                <div className="checkbox">
                  <div>
                    <label className="checkbox_label_appointment">
                      <input
                        type="checkbox"
                        name="check_group"
                        value={TirePurchase}
                        onChange={() => setTirePurchase(!TirePurchase)}
                      />
                      Tire Purchase/Installation
                    </label>
                  </div>
                  {TirePurchase === true ? (
                    <div>
                      <textarea
                        id=""
                        name=""
                        rows="2"
                        placeholder="Tire Purchase/Installation Comments"
                        className="input_field_appointment"
                      />
                    </div>
                  ) : null}
                </div>
 
                <div className="checkbox">
                  <div>
                    <label className="checkbox_label_appointment">
                      <input
                        type="checkbox"
                        name="check_group"
                        value={TireServices}
                        onChange={() => setTireServices(!TireServices)}
                      />
                      Tire Services
                    </label>
                  </div>
                  {TireServices === true ? (
                    <div>
                      <textarea
                        id=""
                        name=""
                        rows="2"
                        placeholder="Tire Services Comments"
                        className="input_field_appointment"
                      />
                    </div>
                  ) : null}
                </div>
 
                <div className="checkbox">
                  <div>
                    <label className="checkbox_label_appointment">
                      <input
                        type="checkbox"
                        name="check_group"
                        value={TireServices}
                        onChange={() => setTireServices(!TireServices)}
                      />
                      Tire
                    </label>
                  </div>
                  {TireServices === true ? (
                    <div>
                      <textarea
                        id=""
                        name=""
                        rows="2"
                        placeholder="Tire Services Comments"
                        className="input_field_appointment"
                      />
                    </div>
                  ) : null}
                </div> */}
              </div>
            </div>
            <div>
              <button
                className="button btn_continue_appointment"
                onClick={() => SetSteps(2)}>
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {Steps === 2 ? (
          <div>
            <div className="formdata2_main">
              <div className="contactinfo_appointment">
                <div>
                  <h2 style={{ fontSize: "28px" }}>Contact Information</h2>
                </div>
                <div className="contactinfo_appointment_inner">
                  <div className="textbox_with_condetails">
                    <label>
                      <b>Full Name*</b>
                    </label>
                    <input
                      type="text"
                      name="name"
                      // placeholder="Full Name"
                      className="input_field_appointment"
                    />
                  </div>
                  <div className="textbox_with_condetails">
                    <label>
                      <b>Email Address*</b>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      // placeholder="Email Address"
                      className="input_field_appointment"
                    />
                  </div>
                  <div className="textbox_with_condetails">
                    <label>
                      <b>Phone Number*</b>
                    </label>
                    <input
                      type="number"
                      name="Phone"
                      // placeholder="Phone Number"
                      className="input_field_appointment"
                    />
                  </div>
                  <div className="textbox_with_condetails">
                    <label>
                      <b>Zip/Postal Code*</b>
                    </label>
                    <input
                      type="number"
                      name="Phone"
                      // placeholder="Zip/Postal Code"
                      className="input_field_appointment"
                    />
                  </div>
                  <div className="contactmode">
                    <div>
                      <h3>Preferred Method of Contact*</h3>
                    </div>
                    <div className="radio_main">
                      <div className="radio">
                        <label className="label">
                          <input
                            type="radio"
                            name="radio_group"
                            value="option1"
                            checked={true}
                          />
                          Email
                        </label>
                      </div>
                      <div className="radio">
                        <label className="label">
                          <input
                            type="radio"
                            name="radio_group"
                            value="option2"
                          />
                          Phone
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="VehicleInformation_app_main">
                <div>
                  <h2 style={{ fontSize: "28px" }}>Vehicle Information</h2>
                </div>
                <div className="dropdown_main_appointment">
                  <div className="dropdown_with_vehiceinfo">
                    <label>
                      <b>Select a Year*</b>
                    </label>
                    <select
                      value={selectedYear}
                      onChange={handleYearChange}
                      className="dropdown_appointment">
                      {renderYearOptions()}
                    </select>
                  </div>
                  <div className="dropdown_with_vehiceinfo">
                    <label for="make">
                      <b>Vehicle Make*</b>
                    </label>
                    <select
                      name="make"
                      id="make"
                      className="dropdown_appointment">
                      <option selected disabled value="">
                        Select Vehicle Make
                      </option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Audi</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Jeep</option>
                    </select>
                  </div>
                  <div className="dropdown_with_vehiceinfo">
                    <label for="model">
                      <b>Vehicle Model*</b>
                    </label>
                    <select
                      className="dropdown_appointment"
                      name="Model"
                      id="Model">
                      <option selected disabled value="">
                        Select Vehicle Model
                      </option>
                      <option value="XC90">Volvo XC90</option>
                      <option value="Q3">Audi Q3</option>
                      <option value="S-Class">S-Class</option>
                      <option value="Compass">Jeep Compass</option>
                    </select>
                  </div>
                  <div className="dropdown_with_vehiceinfo">
                    <label for="Additionalmodel">
                      <b>Additional Model Info*</b>
                    </label>
                    <select
                      className="dropdown_appointment"
                      name="Additionalmodel"
                      id="Additionalmodel">
                      <option selected disabled value="">
                        Select Additional Model Info
                      </option>
                      <option value="BlueHybrid">Blue Hybrid</option>
                      <option value="Limited">Limited</option>
                      <option value="LimitedHybrid">Limited Hybrid</option>
                      <option value="Line">N Line</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
              <button
                className="button btn_continue_appointment"
                onClick={() => SetSteps(1)}>
                Back
              </button>
              <button
                className="
              button
              btn_continue_appointment"
                onClick={() => SetSteps(3)}>
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {Steps === 3 ? (
          <div className="formdata3_main">
            <div>
              <h2 style={{ fontSize: "28px" }}>Appointment Summary</h2>
            </div>
            <div className="summary_details_app">
              <div className="appo_summary_inner">
                <div className="storenameLocation_sec3_appo">
                  <div>
                    <h3>Location</h3>
                  </div>
                  <div>
                    {location.state.item.Storename}
                    <br />
                    {location.state.item.location}
                  </div>
                </div>
                <div className="dayandtime_sec3_appo">
                  <div>
                    <h3>Date & Time</h3>
                  </div>
                  <div>
                    Saturday 10/28/23
                    <br />
                    {location.state.item.Monday}
                  </div>
                </div>
              </div>
              <div className="appo_ServiceNeeded_locationsec">
                <div>
                  <h3>Service(s) Needed</h3>
                </div>
                <div>
                  <p>Tire Purchase/Installation</p>
                  <textarea
                    id=""
                    name=""
                    rows="8"
                    cols="50"
                    placeholder="Tire Purchase/Installation Comments"
                    className="input_field_message"
                  />
                </div>
                <div>
                  <div>
                    <label className="checkbox_label_appointment">
                      <input
                        type="checkbox"
                        name="check_group"
                        style={{ marginTop: "0.4rem" }}
                      />
                      Yes, email me service reminders, coupons, and special
                      offers from us.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid lightgray", width: "90%" }} />
            <div>
              <p style={{ wordSpacing: "3px", letterSpacing: "1px" }}>
                Submit your appointment request and we will respond to you
                within 30 business minutes.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", gap: "2rem" }}>
                <button
                  className="button btn_continue_appointment"
                  onClick={() => SetSteps(2)}>
                  Back
                </button>
                <button
                  className="
              button
              btn_continue_appointment"
                  // onClick={() => SetSteps(3)}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {Steps === 1 ? (
        <div>
          <div className="sidebar_contact_details_app">
            <div>
              <h1 style={{ color: "var(--color-brown", fontSize: "40px" }}>
                NEED AN APPOINTMENT SOONER?
              </h1>
            </div>
            <div>
              <p style={{ color: "var(--color-white", fontSize: "20px" }}>
                Give us a call, we're here to help.
              </p>
            </div>
            <div className="phcall_app_sec">
              <MdCall
                style={{ color: "var(--color-brown", fontSize: "30px" }}
              />
              <h2 style={{ color: "var(--color-white" }}>
                {location.state.item.Phone}
              </h2>
            </div>
          </div>
          <div className="mystore_details">
            <h1>My Store</h1>
            <hr style={{ border: "1px solid lightgray", width: "100%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}>
              <p> {location.state.item.location}</p>
              <p> {location.state.item.Storename}</p>
            </div>
            <p style={{ fontWeight: "300", fontSize: "14px" }}>Change Store</p>
          </div>
        </div>
      ) : null}
      {Steps === 2 ? (
        <div>
          <div className="sidebar_contact_details_app">
            <div>
              <h1 style={{ color: "var(--color-brown", fontSize: "40px" }}>
                Don’t Know Your Vehicle Information?
              </h1>
            </div>
            <div>
              <p style={{ color: "var(--color-white", fontSize: "20px" }}>
                Give us a call, we're here to help.
              </p>
            </div>
            <div className="phcall_app_sec">
              <MdCall
                style={{ color: "var(--color-brown", fontSize: "30px" }}
              />
              <h2 style={{ color: "var(--color-white" }}>
                {location.state.item.Phone}
              </h2>
            </div>
          </div>
          <div className="mystore_details">
            <h1>My Store</h1>
            <hr style={{ border: "1px solid lightgray", width: "100%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}>
              <p> {location.state.item.location}</p>
              <p> {location.state.item.Storename}</p>
            </div>
            <p style={{ fontWeight: "300", fontSize: "14px" }}>Change Store</p>
          </div>
        </div>
      ) : null}
      {Steps === 3 ? (
        <div className="mystore_details">
          <h1>My Store</h1>
          <hr style={{ border: "1px solid lightgray", width: "100%" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}>
            <p> {location.state.item.location}</p>
            <p> {location.state.item.Storename}</p>
          </div>
          <p style={{ fontWeight: "300", fontSize: "14px" }}>Change Store</p>
        </div>
      ) : null}
      {/* <div>
        <h1>My Store</h1>
        <p> {location.state.item.Storename}</p>
        <p> {location.state.item.location}</p>
      </div> */}
    </div>
  );
};

export default AppointmentForm;
