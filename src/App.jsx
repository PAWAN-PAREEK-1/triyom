import React from 'react'
import Home from './home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
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
   < Route path="/Contact" element={<Contact/>}/>
   <Route path="/Services" element={<Services/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>


    </>
  )
}

export default App