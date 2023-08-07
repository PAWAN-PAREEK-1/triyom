import { lazy,Suspense } from 'react';
import "./Global.css";
import rightarrow from "/public/assets/img/rightarrow.svg";
const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));
const ProjectInfo = lazy(() => import('./Components/ProjectInfo'));


const Facilities = () => {
  return (
    <Suspense fallback={<div><Loading/></div>}>
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
    </Suspense>
  )
}

export default Facilities