import React from "react";
import "./Global.css";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/form";
const Faqs = () => {
  return (
    <div>


<section className="index-hero about-hero">
        <h1>Faqs</h1>
      </section>

      <Faq/>
      <Benifits/>

      <Testimonial/>
      <Form/>




    </div>
  )
}

export default Faqs