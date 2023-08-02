import React, { useState } from "react";
import "./Benifits.css";
import rightarrow from "../assets/img/rightarrow.svg";
import Downarrow from "/public/assets/img/downarrow.svg";
import uparrow from "/public/assets/img/uparrow.svg";

const Benifits = () => {
  const businessCenters = [
    { number: "01", name: "Business Center", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "] },
    { number: "02", name: "Business Center", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "] },
    { number: "03", name: "Business Center", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "] },
    { number: "04", name: "Business Center", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "] },
    { number: "05", name: "Business Center", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "] },
    // Add more items as needed
  ];

  const [openFAQ, setOpenFAQ] = useState(0); // Default to the first business center

  const handleToggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <section className="benifits">
        <div className="title">
          <h1>
            Everything Within <span>Reach</span>{" "}
          </h1>
          <div className="btn">
            <a href="#">
              Download eBrochures
              <img src={rightarrow} alt="" />
            </a>
          </div>
        </div>
        <div className="detail">
          <div className="hero">
            <img src="../assets/img/benifitshero.svg" alt="" />
          </div>
          <div className="be">
            {businessCenters.map((center, index) => (
              <div className="hr" key={center.number}>
                <div className={`be-detail ${openFAQ === index ? "open" : ""}`}>
                  <span onClick={() => handleToggleFAQ(index)}>
                    <div className="bg-head">
                      <h1>{center.number}</h1>
                      <h1>{center.name}</h1>
                    </div>
                  </span>
                  <div className="bg-head1">
                      <img src={openFAQ === index ? uparrow : Downarrow} alt="" />
                    </div>
                </div>
                {openFAQ === index && (
                  <div>
                    {center.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="faq-item">
                        {faq}
                      </div>
                    ))}
                  </div>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benifits;
