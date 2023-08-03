import React, { useEffect, useState } from "react";
import rightarrow from "../assets/img/rightarrow.svg";
import "../Global.css";

// ... Other imports ...

function TriyomSection() {
      const [activeSlide,setActiveSlide]= useState(0)
      const slides = [

        {
          img1:"../assets/img/Buildings.svg",
         row1:"6 Towers",
         unit1:"152 Units",
         img2:"../assets/img/home.svg",
         row2:"3 BHK",
         unit2:"104 Units",
         img3:"../assets/img/penthouse.svg",

         row3:"Penthouse",
         unit3:"04 Units",
         img4:"../assets/img/home.svg",
         row4:"4 BHK",
         unit4:"44 Units",
         img5:"../assets/img/garden.svg",
         row5:"Garden",
         unit5:"12K+Sq Ft",
         title:"Triyom Casa1",
         add:" Site: Opp. Autograph Club, Near Diamond Bourse, Abhva Chokdi, Surat",
         project:"../assets/img/triyom-hero.svg"



        },
        {
          img1:"../assets/img/Buildings.svg",
         row1:"7 Towers",
         unit1:"152 Units",
         img2:"../assets/img/home.svg",
         row2:"3 BHK",
         unit2:"104 Units",
         img3:"../assets/img/penthouse.svg",

         row3:"Penthouse",
         unit3:"04 Units",
         img4:"../assets/img/home.svg",
         row4:"4 BHK",
         unit4:"44 Units",
         img5:"../assets/img/garden.svg",
         row5:"Garden",
         unit5:"12K+Sq Ft",
         title:"Triyom Casa1",
         add:" Site: Opp. Autograph Club, Near Diamond Bourse, Abhva Chokdi, Surat",
         project:"../assets/img/triyom-hero.svg"


         },
         {
          img1:"../assets/img/Buildings.svg",
         row1:"8 Towers",
         unit1:"152 Units",
         img2:"../assets/img/home.svg",
         row2:"3 BHK",
         unit2:"104 Units",
         img3:"../assets/img/penthouse.svg",

         row3:"Penthouse",
         unit3:"04 Units",
         img4:"../assets/img/home.svg",
         row4:"4 BHK",
         unit4:"44 Units",
         img5:"../assets/img/garden.svg",
         row5:"Garden",
         unit5:"12K+Sq Ft",
         title:"Triyom Casa3",
         add:" Site: Opp. Autograph Club, Near Diamond Bourse, Abhva Chokdi, Surat",
         project:"../assets/img/triyom-hero.svg"


         }
      ]



  return (
    <section className="triyomsec">
      <div className="triyom">
        <div className="triyom-left">
          <h3>
            <hr />
            {slides[activeSlide].title}
          </h3>
          <p>
          {slides[activeSlide].add}
          </p>

           <div  className="flat-detail">
              <h2>
                <img src={slides[activeSlide].img1} alt="" />{slides[activeSlide].row1}
              </h2>
              <h3>{slides[activeSlide].unit1}</h3>
            </div>
            <div  className="flat-detail">
              <h2>
                <img src={slides[activeSlide].img2} alt="" />{slides[activeSlide].row2}
              </h2>
              <h3>{slides[activeSlide].unit2}</h3>
            </div>
            <div  className="flat-detail">
              <h2>
                <img src={slides[activeSlide].img3} alt="" />{slides[activeSlide].row3}
              </h2>
              <h3>{slides[activeSlide].unit3}</h3>
            </div>
            <div  className="flat-detail">
              <h2>
                <img src={slides[activeSlide].img4} alt="" />{slides[activeSlide].row4}
              </h2>
              <h3>{slides[activeSlide].unit4}</h3>
            </div>
            <div  className="flat-detail">
              <h2>
                <img src={slides[activeSlide].img5} alt="" />{slides[activeSlide].row5}
              </h2>
              <h3>{slides[activeSlide].unit5}</h3>
            </div>



          <div className="btn triyom-btn">
            <a href="#">
              Visit Now <img src={rightarrow} alt="" className="rightarrow"/>
            </a>
          </div>
        </div>
        <div className="triyom-right">
          <img src={slides[activeSlide].project} alt="" />
        </div>
      </div>

      <div className="circel">
        {slides.map((_, i) => (
             <span className={activeSlide === i ? "active" : ""} onClick={() => setActiveSlide(i) }key={i}></span>
        ))}

      </div>
    </section>
  );
}

export default TriyomSection;
