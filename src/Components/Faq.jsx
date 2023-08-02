import React, { useState } from "react";
import "./Benifits.css";
import rightarrow from "../assets/img/rightarrow.svg";
import Downarrow from "/public/assets/img/downarrow.svg";
import uparrow from "/public/assets/img/uparrow.svg";
import "./Faq.css";

const Faq = () => {
  const businessCenters = [
    {  name: "What is Triyom Lifestyle?", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature,  "] },
    {  name: "Who are the Promoters of Triyom Realty?", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature,  "] },
    {  name: "What is Triyom Lifestyle?", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature,  "] },
    {  name: "What make our projects different?", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature, "] },
    {  name: "I am interested in projects. How to proceed further?", faqs: ["Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in classical literature,  "] },
    // Add more items as needed
  ];

  const [openFAQ, setOpenFAQ] = useState(0); // Default to the first business center

  const handleToggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <section className="benifits benifits-faq">

        <div className="detail detail-faq">

          <div className="hero hero-faq">
           
          </div>
          <div className="be be-faq">
          <div className="title title-faq">
          <h1>
          Frequently asked Questions
          </h1>
          <div>
            <h1 id="title-dec">Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </h1>

          </div>
        </div>
            {businessCenters.map((center, index) => (
              <div className="hr" key={center.number}>
                <div className={`be-detail be-detail-faq ${openFAQ === index ? "open  " : ""}`}>
                  <span onClick={() => handleToggleFAQ(index)}>
                    <div className="bg-head bg-head-faq">

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
                      <div key={faqIndex} className="faq-item faq-item2">
                        {faq}
                      </div>
                    ))}
                  </div>
                )}
                {/* <hr /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
