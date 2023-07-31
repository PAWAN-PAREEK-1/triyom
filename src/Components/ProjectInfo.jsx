
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
            ServiceTitle: "Lush Green Garden",
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
            ServiceTitle: "Lush Green Garden",
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
            ServiceTitle: "Lush Green Garden",
            ServiceDec: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "

        }

    ]
  return (
    <div>
         <section className="Project">
        <h1>Amenities to Personify Luxury for Royalty</h1>
        <div className="project-info">
          <div className="project-row">
            {slides.map((slide, index) => (
              <div key={index} className="project-card">
                <img src={slide.ServiceImg} alt="" />
                <h4>{slide.ServiceName}</h4>
                <h3>{slide.ServiceTitle}</h3>
                <p>{slide.ServiceDec}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="circel">
        {slides.map((_, i) => (
             <span className={activeSlide === i ? "active" : ""} onClick={() => setActiveSlide(i) }key={i}></span>
        ))}

      </div>
      </section>

    </div>
  )
}

export default ProjectInfo