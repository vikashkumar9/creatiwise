import React, { useState } from "react";
import starIcon from "../assets/star.png";
import { faqData } from "../constants/Constant";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordionContainer py-8 px-6 md:py-16 md:px-[10%] flex flex-col gap-6 md:gap-8">
      <h3 className="syne-text font-bold text-[28px] md:text-[40px] text-white flex items-center gap-2">
        <img alt="icon" src={starIcon} className="w-6 h-6 md:w-8 md:h-8" />
        Frequently asked questions
      </h3>
      <div className="szh-accordion">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`szh-accordion__item ${
              activeIndex === index
                ? "szh-accordion__item--expanded"
                : "szh-accordion__item--collapsed"
            }`}
          >
            <h3 className="szh-accordion__item-heading m-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="szh-accordion__item-btn w-full text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="syne-text text-white font-medium text-[20px] md:text-[32px]">
                  {item.question}
                </span>
              </button>
            </h3>
            {activeIndex === index && (
              <div
                className="szh-accordion__item-content mt-2 md:mt-4"
                role="region"
              >
                <p className="text-[14px] md:text-[18px] text-[#CBCBCB]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
