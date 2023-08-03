import React from "react";
import "./Global.css";
import rightarrow from "../src/assets/img/rightarrow.svg";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/Form";

const About = () => {
  return (
    <div>
      <section className="index-hero about-hero">
        <h1>About Us</h1>
      </section>
      <section className="experiences">
        <div className="exp-left">
          <img src="../src/assets/img/exp-hero.svg" alt="" />
          <div className="exp">
            <div className="exp-left-35">
              <h1>35</h1>
              <h4>Years Of Experience</h4>
            </div>
          </div>
        </div>
        <div className="exp-right">
          <h1>Experience the Perfect Harmony Between Luxury and Space</h1>
          <h4>Three upcoming projects – Luxurious Flats in Surat</h4>
          <p>
            Triyom Realty is coming with three thoughtfully crafted Premium
            residential projects that connect you to both nature and the city.
            Enjoy high-class living in a quiet residential oasis with easy
            access to the charms of the neighborhood
          </p>
          <p id="right-p">
            Triyom Realty is coming with three thoughtfully crafted Premium
            residential projects that connect you to both nature and the city.
            Enjoy high-class living in a quiet residential oasis with easy
            access to the charms of the neighborhood Triyom Realty is coming
            with three thoughtfully crafted Premium residential projects that
            connect you to both nature and the city. Enjoy high-class living in
            a quiet residential oasis with easy access to the charms of the
            neighborhood
          </p>
          <div className="btn">
            <a href="#">
              About Us <img src={rightarrow} alt="" />
            </a>
          </div>
        </div>
      </section>
      <Testimonial/>
      <Benifits/>
      <Faq/>
      <Form/>
    </div>
  );
};

export default About;
