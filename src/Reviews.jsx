import { lazy,Suspense } from 'react';
import "./Global.css";
// import rightarrow from "../assets/img/rightarrow.svg";
const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));

const Reviews = () => {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <div>
      <section className="index-hero about-hero">
        <h1>Reviews</h1>
      </section>

      <Testimonial/>
      <Benifits/>
      <Faq/>
      <Form/>
    </div>
    </Suspense>
  );
};

export default Reviews;
