import React from "react";

const Testimonial = () => {
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
            <img src="../assets/img/rev1.svg" alt="" />
          </div>
          <div className="testi-detail">
            <h2>Teatimonial</h2>
            <p>
              Lorem Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source.Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source.Lorem Ipsum passage, and going through the
              cites of the word in classical literature, Lorem Ipsum passage,
              and going through the cites of the word in classical literature,
              </p>
            <h1>Phillip Franci</h1>
            <h3>Selling Agents</h3>
          </div>
        </div>
        <div className="testi-left">
          <img src="../assets/img/rev3.svg" alt="" className="side-img"/>
        </div>
      </div>
      <div className="navigation">
        <img src="../assets/img/leftarrow.svg" alt="" />
        <img src="../assets/img/rightarrow.svg" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
