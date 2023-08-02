import React from 'react'
import "./Global.css";
import rightarrow from "../src/assets/img/rightarrow.svg";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/form";
import ProjectInfo from './Components/ProjectInfo';

const Facilities = () => {
  return (
    <div>
      <section className="index-hero about-hero">
        <h1>Facilities</h1>
      </section>

      <ProjectInfo />
      <Benifits />
      <Testimonial />
      <Faq />
      <Form/>



    </div>
  )
}

export default Facilities