
import React, { useEffect, useState } from "react";
import "../Global.css";


const ProjectInfo = () => {
    const [activeSlide,setActiveSlide] = useState(0)
    const slides = [
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "Lush Green Garden",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        },
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "8’ Wide Jogging Track",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        },
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "Lush Green Garden",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        },
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "Modern Gym",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        },
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "24/7 cctv",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        },
         {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "separate Admin Office",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        }
        ,
        {
            ServiceImg: "../assets/img/ser3.svg",
            ServiceName:"AMENITIES",
            ServiceTitle: "Lush Green Garden",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        }

    ];
    const cardsPerPage = 6;
    const totalPages = Math.ceil(slides.length / cardsPerPage);

    const handleClick = (pageIndex) => {
      setActiveSlide(pageIndex);
    };

    const renderCards = () => {
      const startIndex = activeSlide * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;

      return slides.slice(startIndex, endIndex).map((slide, index) => (
        <div key={index} className="project-card">
           <img src={slide.ServiceImg} alt="" />
                <h4>{slide.ServiceName}</h4>
                <h3>{slide.ServiceTitle}</h3>
                <p>{slide.ServiceDec}</p>
        </div>
      ));
    };

    return (
      <div>
        <section className="Project">
          <h1>Amenities to Personify Luxury for Royalty</h1>
          <div className="project-info">
            <div className="project-row">{renderCards()}</div>
          </div>
          <div className="circel">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={activeSlide === i ? "active" : ""}
                onClick={() => handleClick(i)}
              ></span>
            ))}
          </div>
        </section>
      </div>
    );
  };



export default ProjectInfo