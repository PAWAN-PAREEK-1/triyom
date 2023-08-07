import { lazy,Suspense } from 'react';
import "./Global.css";
const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));
const Faqs = () => {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <div>


<section className="index-hero about-hero">
        <h1>Faqs</h1>
      </section>

      <Faq/>
      <Benifits/>

      <Testimonial/>
      <Form/>




    </div>
    </Suspense>
  )
}

export default Faqs