import React from "react";
import "./Global.css";
import Button from "../src/Components/Button";
import rightarrow from "../src/assets/img/rightarrow.svg";
import "./Components/header.css";
import TriyomSection from "./Components/TriyomSection";
import ProjectInfo from "./Components/ProjectInfo";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/form";

const Home = () => {
  return (
    <section className="main-hero">
      <section className="index-hero">
        <h4>
          <hr />
          Innovation
        </h4>
        <h1>
          Enhanced<br></br>
          Living Experiences
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />{" "}
          euismod nulla quis sollicitudin viverra.{" "}
        </p>
        <Button />
        <div className="btn side-btn">
          <a href="#">Book Visit</a>
        </div>
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

      <TriyomSection />

      <ProjectInfo/>
      <Testimonial/>
      <Benifits/>
      <Faq/>
      <Form/>
      
    </section>
  );
};

export default Home;
