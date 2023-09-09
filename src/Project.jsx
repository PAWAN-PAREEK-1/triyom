import { lazy,Suspense } from 'react';
import "./Global.css";
import rightarrow from "/public/assets/img/rightarrow.svg";
const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));

const TriyomSection = lazy(() => import('./Components/TriyomSection'));

const Project = () => {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <div>
      <section className="index-hero about-hero">
        <h1>Projects</h1>
      </section>
      {/* <section className="experiences">
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
              About Us <img src={rightarrow} alt="" />
            </a>
          </div>
        </div>
      </section> */}
      <TriyomSection/>
      <Testimonial/>
      <Benifits/>

      <Form/>
    </div>
    </Suspense>
  );
};

export default Project;
