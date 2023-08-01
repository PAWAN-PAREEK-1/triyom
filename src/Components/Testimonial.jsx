import React, { useState } from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      testidec: "",
      testiname: "huhhi",
      testipost: "",
      testiimg: "../assets/img/rev1.svg",
      
    },
    {
      testidec: "",
      testiname: "hujhjhbhhi",
      testipost: "",
      testiimg: "../assets/img/rev2.svg",
    },
    {
      testidec: "",
      testiname: "hujhj5hbhhi",
      testipost: "",
      testiimg: "../assets/img/rev3.svg",
    },
    {
      testidec: "",
      testiname: "",
      testipost: "",
      testiimg: "../assets/img/rev2.svg",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="testi-container">
      <img src="../assets/img/testibg.svg" alt="" id="testibg"/>
      <img src="../assets/img/testiicon.svg" alt="" id="testiicon"/>
      <div className="testi-info">
        <div className="testi-right">
          <img src="../assets/img/rev2.svg" alt="" className="side-img"/>
        </div>
        <div className="testi-center">
          <div className="center-img">
            <img src={testimonialData[currentIndex].testiimg} alt="" />
          </div>
          <div className="testi-detail">
            <h2>Teatimonial</h2>
            <p>
            {testimonialData[currentIndex].testidec}
              </p>
            <h1>{testimonialData[currentIndex].testiname}</h1>
            <h3>{testimonialData[currentIndex].testipost}</h3>
          </div>
        </div>
        <div className="testi-left">
          <img src="../assets/img/rev3.svg" alt="" className="side-img"/>
        </div>
      </div>
      <div className="navigation">
      <img
          src="../assets/img/leftarrow.svg"
          alt=""
          onClick={handlePrev}
          className="arrow-icon"
        />
        <img
          src="../assets/img/rightarrow.svg"
          alt=""
          onClick={handleNext}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default Testimonial;
