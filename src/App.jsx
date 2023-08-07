import React from 'react'
// import Home from './Home'
// import About from './About'
// import Facilities from './Facilities'
// import Contact from './Contact'
// import Project from './Project'
// import Reviews from './Reviews'
// import Gallery from './Gallery'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Faqs from './Faqs'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./Global.css";
import { lazy,Suspense } from 'react';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Facilities = lazy(() => import('./Facilities'));
const Contact = lazy(() => import('./Contact'));
const Project = lazy(() => import('./Project'));
const Reviews = lazy(() => import('./Reviews'));
const Gallery = lazy(() => import('./Gallery'));
const Faqs = lazy(() => import('./Faqs'));
const Header = lazy(() => import('./Components/Header'));
const Footer = lazy(() => import('./Components/Footer'));
const Loading = lazy(() => import('./Components/Loading.jsx'));




const App = () => {

  return (

    <>

  <BrowserRouter>
  <Suspense fallback={<div><Loading/></div>}>
  <Header/>


  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
   < Route path="/Project" element={<Project/>}/>
   <Route path="/Facilities" element={<Facilities/>}/>
   <Route path="/Reviews" element={<Reviews/>}/>
   <Route path="/Gallery" element={<Gallery/>}/>
   <Route path="/Faqs" element={<Faqs/>}/>
   <Route path="/Gallery" element={<Gallery/>}/>
   <Route path="/Contact" element={<Contact/>}/>

  </Routes>


  <Footer/>
  </Suspense>
  </BrowserRouter>


    </>
  )
}

export default App