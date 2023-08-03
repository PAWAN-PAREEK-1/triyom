import React from 'react'
import Home from './Home'
import About from './About'
import Facilities from './Facilities'
import Contact from './Contact'
import Project from './Project'
import Reviews from './Reviews'
import Gallery from './Gallery'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Faqs from './Faqs'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./Global.css";



const App = () => {

  return (

    <>

  <BrowserRouter>
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
  </BrowserRouter>


    </>
  )
}

export default App