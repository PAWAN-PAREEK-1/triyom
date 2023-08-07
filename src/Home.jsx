import { lazy,Suspense } from 'react';
import "./Global.css";
import Button from "../src/Components/Button";
import rightarrow from "/public/assets/img/rightarrow.svg";
import "./Components/Header.css";
// import TriyomSection from "./Components/TriyomSection";
// import ProjectInfo from "./Components/ProjectInfo";
// import Testimonial from "./Components/Testimonial.jsx";
// import Benifits from "./Components/Benifits.jsx";
// import Faq from "./Components/Faq.jsx";
// import Form from "./Components/Form";
const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));
const ProjectInfo = lazy(() => import('./Components/ProjectInfo'));
const TriyomSection = lazy(() => import('./Components/TriyomSection'));



const Home = () => {

  return (
<Suspense fallback={<div><Loading/></div>}>
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
        <div className='btn'>
        <a href="#">
        Discover More <img src={rightarrow} alt="" className="rightarrow"/>
        </a>

    </div>
        <div className="btn side-btn">
          <a href="#">Book Visit</a>
        </div>
      </section>
      <section className="experiences">
        <div className="exp-left">
          <img src="../assets/img/exp-hero.svg" alt="" />
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
              About Us <img src={rightarrow} alt=""className="rightarrow" />
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
    </Suspense>
  );
};

export default Home;
