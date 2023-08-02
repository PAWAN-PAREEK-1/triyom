import React from "react";
import "./Form.css";
import rightarrow from "../assets/img/rightarrow.svg";

const Form = () => {
  return (
    <div>
      <section className="contact-form">
        <div className="form-hero">
          <img src="../assets/img/contacthero.svg" alt="" />
          <h1>Get In Touch With Us</h1>
        </div>
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <div className="form-sec">
            <input type="date" placeholder="Date" />
            <input type="time" placeholder="Time" />
          </div>
          <div className="form-sec">
            <select name="You are" id="you" >
              <option value="You are">You are</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
            </select>
            <select name="You are" id="you" >
              <option value="You are">I am an Interested In</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
            </select>
          </div>
          <div className="btn submit-btn">
            <button>
              Submit <img src={rightarrow} alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
