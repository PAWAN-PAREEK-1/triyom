import React, { useState } from 'react';
import rightarrow from "../assets/img/rightarrow.svg";
import "../Global.css";
// ... Other imports ...

function TriyomSection() {
  // State to store the data for the first circle
  const [circle1Data, setCircle1Data] = useState({
    towers: '6 Towers',
    units: '156 Units',
  });

  // State to store the data for the second circle
  const [circle2Data, setCircle2Data] = useState({
    towers: '6 Towers',
    units: '156 Units',
  });

  // Function to change the data in the first circle
  const handleClickFirstCircle = () => {
    setCircle1Data((prevData) => ({
      ...prevData,
      towers: 'New Towers',
      units: '15',
    }));
  };

  // Function to change the data in the second circle
  const handleClickSecondCircle = () => {
    setCircle2Data((prevData) => ({
      ...prevData,
      towers: 'New Towers gjgj',
      units: '1556',
    }));
  };

  return (
    <section className="triyomsec">
    <div className="triyom">
      <div className="triyom-left">
              <h3><hr />Triyom Casa</h3>
              <p>Site: Opp. Autograph Club, Near Diamond Bourse, Abhva Chokdi, Surat</p>
          <div className="flat-detail">
            <h2><img src="../src/assets/img/building.svg" alt="" />6 Towers</h2>
            <h3>156 Units</h3>
          </div>
          <div className="flat-detail">
            <h2><img src="../src/assets/img/building.svg" alt="" />6 Towers</h2>
            <h3>156 Units</h3>
          </div>
          <div className="flat-detail">
            <h2><img src="../src/assets/img/building.svg" alt="" />6 Towers</h2>
            <h3>156 Units</h3>
          </div>
          <div className="flat-detail">
            <h2><img src="../src/assets/img/building.svg" alt="" />6 Towers</h2>
            <h3>156 Units</h3>
          </div>
          <div className="flat-detail">
            <h2><img src="../src/assets/img/building.svg" alt="" />6 Towers</h2>
            <h3>156 Units</h3>
          </div>
          <div className="btn triyom-btn" >
          <a href="#">
            Visit Now <img src={rightarrow} alt="" />
          </a>
        </div>


      </div>
      <div className="triyom-right">
        <img src="../src/assets/img/triyom-hero.svg" alt="" />

      </div>


    </div>

    <div className="circel">
    <a href=""><span></span></a>
      <a href=""><span></span></a>
      <a href=""><span></span></a>
    </div>
    </section>
  );
}

export default TriyomSection;




