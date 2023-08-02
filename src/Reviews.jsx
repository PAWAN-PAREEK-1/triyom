import React from "react";
import "./Global.css";
import rightarrow from "../src/assets/img/rightarrow.svg";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/form";

const Reviews = () => {
  return (
    <div>
      <section className="index-hero about-hero">
        <h1>Reviews</h1>
      </section>
     
      <Testimonial/>
      <Benifits/>
      <Faq/>
      <Form/>
    </div>
  );
};

export default Reviews;
