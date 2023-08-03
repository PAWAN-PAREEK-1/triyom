import React from "react";
import "./Global.css";

import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/Form";
const Contact = () => {
  return (
    <div>

<section className="index-hero about-hero">
        <h1>Contact</h1>
      </section>
      <Form/>
     <Faq/>
     <Benifits/>
     <Testimonial/>




    </div>
  )
}

export default Contact