import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      testidec:
        "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word ites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, Lorem Ipsum passage, and going through the cites sical literature,he word in classical literature, Lorem Ipsum passage, and going through the cites sical literature ",
      testiname: "Phillip Franci",
      testipost: "Selling Agents",
      testiimg: "../assets/img/rev1.svg",
    },
    {
      testidec:
        "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word ites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, Lorem Ipsum passage, and going through the cites sical literature,he word in classical literature, Lorem Ipsum passage, and going through the cites sical literature ",
      testiname: "aaditya singha",
      testipost: "safai karmchari",
      testiimg: "../assets/img/rev2.svg",
    },
    {
      testidec:
        "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word ites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, Lorem Ipsum passage, and going through the cites sical literature,he word in classical literature, Lorem Ipsum passage, and going through the cites sical literature ",
      testiname: "aastha malhar",
      testipost: "gatar karmchari",
      testiimg: "../assets/img/rev3.svg",
    },
    {
      testidec:
        "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word ites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, Lorem Ipsum passage, and going through the cites sical literature,he word in classical literature, Lorem Ipsum passage, and going through the cites sical literature ",
     testiname: "dipika paadukon",
      testipost: "sns karmachari",
      testiimg: "../assets/img/rev2.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    const lastIndex = testimonialData.length - 1;
    setPrevIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );
    setNextIndex((currentIndex + 1) % testimonialData.length);
  }, [currentIndex, testimonialData]);

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
      <img src="../assets/img/testibg.svg" alt="" id="testibg" />
      <img src="../assets/img/testiicon.svg" alt="" id="testiicon" />
      <div className="testi-info">
        <div className="testi-right">
          {prevIndex !== null && (
            <img
              src={testimonialData[prevIndex].testiimg}
              alt=""
              className="side-img"
            />
          )}
        </div>
        <div className="testi-center">
        <h2 id="testicenter">Teatimonial</h2>
          <div className="center-img">

            <img src={testimonialData[currentIndex].testiimg} alt="" />
          </div>
          <div className="testi-detail">
            <h2 id="testihead">Teatimonial</h2>
            <p>{testimonialData[currentIndex].testidec}</p>
            <h1>{testimonialData[currentIndex].testiname}</h1>
            <h3>{testimonialData[currentIndex].testipost}</h3>
          </div>
        </div>
        <div className="testi-left">
          {nextIndex !== null && (
            <img
              src={testimonialData[nextIndex].testiimg}
              alt=""
              className="side-img"
            />
          )}
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
          src="../assets/img/rightarrow1.svg"
          alt=""
          onClick={handleNext}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default Testimonial;
