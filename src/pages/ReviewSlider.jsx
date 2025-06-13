import React, { useState } from "react";
import starIcon from "../assets/star.png";
import quote from "../assets/quote.png";
import arrow from "../assets/arrow.png";
import { reviews } from "../constants/Constant";

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="reviewContainer py-8 px-4 md:py-16 md:px-[10%] flex flex-col gap-8 relative">
      <h2 className="syne-text flex gap-2 items-center font-bold text-2xl md:text-4xl text-white">
        <img
          alt="star-icon"
          loading="lazy"
          width="24"
          height="24"
          decoding="async"
          src={starIcon}
          className="inline"
        />
        What they say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-6 md:py-10">
        <div className="profileCont flex gap-4 ">
          <img
            alt="User Profile"
            loading="lazy"
            width="48"
            height="48"
            className="rounded-full h-12 w-12 md:h-16 md:w-16"
            src={currentReview.image}
          />

          <div className="flex flex-col gap-1">
            <h5 className="syne-text font-semibold text-lg md:text-2xl text-white">
              {currentReview.name}
            </h5>
            <p className="text-sm md:text-lg text-white">
              {currentReview.company}
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            alt="Quote icon"
            loading="lazy"
            width="80"
            height="64"
            className="absolute left-2 -top-8 hidden md:block"
            src={quote}
          />

          <p className="syne-text text-base md:text-2xl text-white font-semibold">
            {currentReview.review}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-7 mt-6">
        <button
          onClick={handlePrev}
          className="sliderBtn hover:bg-gray-300 flex items-center justify-center bg-white w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
          aria-label="Previous Slide"
        >
          <img
            alt="Previous icon"
            loading="lazy"
            width="12"
            height="8"
            src={arrow}
            className="h-fit cursor-pointer"
          />
        </button>

        <button
          onClick={handleNext}
          className="sliderBtn hover:bg-gray-300 flex items-center justify-center bg-white w-8 h-8 md:w-10 md:h-10 rounded-full transform rotate-180 cursor-pointer"
          aria-label="Next Slide"
        >
          <img
            alt="Next icon"
            loading="lazy"
            width="12"
            height="8"
            src={arrow}
            className="h-fit cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
