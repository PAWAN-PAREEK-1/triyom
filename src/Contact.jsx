import { lazy,Suspense } from 'react';
import "./Global.css";

const Testimonial = lazy(() => import('./Components/Testimonial.jsx'));
const Loading = lazy(() => import('./Components/Loading.jsx'));
const Benifits = lazy(() => import('./Components/Benifits.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Form = lazy(() => import('./Components/Form'));

const Contact = () => {
  return (
    <div>
<Suspense fallback={<div><Loading/></div>}>
<section className="index-hero about-hero">
        <h1>Contact</h1>
      </section>
      <Form/>
     <Faq/>
   
     </Suspense>




    </div>
  )
}

export default Contact