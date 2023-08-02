import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";

const Footer = () => {
  const imageSliderRef = useRef(null);

  useEffect(() => {
    let imageIndex = 0;
    const images = imageSliderRef.current.children;

    const slideImages = () => {
      images[imageIndex].classList.remove("active");
      imageIndex = (imageIndex + 1) % images.length;
      images[imageIndex].classList.add("active");
    };

    const sliderInterval = setInterval(slideImages, 3000); // Slide every 3 seconds

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <footer>
      <div className="image-slider" ref={imageSliderRef}>
        <img src="../assets/img/footer1.svg" alt="" className="active" />
        <img src="../assets/img/footer2.svg" alt="" />
        <img src="../assets/img/footer3.svg" alt="" />
        <img src="../assets/img/footer4.svg" alt="" />
        <img src="../assets/img/footer5.svg" alt="" />
        <img src="../assets/img/footer6.svg" alt="" />
      </div>
      <hr />
      <div className="footer-content">
        <div className="logo">
          <img src="../assets/img/logo.svg" alt="" />
        </div>
        <hr />
        <div className="links">
          {/* Use Link instead of anchor tags */}
          <Link to="/"><span>Home</span></Link><hr />
          <Link to="/about"><span>About Us</span></Link><hr />
         <Link to="/Projects"><span>Projects</span></Link><hr />
          <Link to="/"><span>Facilities</span></Link><hr />
          <Link to="/about"><span>Reviews</span></Link><hr />
           <Link to="/Projects"><span>Gallary</span></Link><hr />
          <Link to="/about"><span>FAQs</span></Link><hr />
           <Link to="/Projects"><span>Contact Us</span></Link>
          {/* Add more links as needed */}
        </div>
        <hr />
        {/* <div className="sections"></div> */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} | Triyom Realty by Suresh S Gondalia | All Rights Reserved |
        </div>
      </div>
    </footer>
  );
};

export default Footer;
