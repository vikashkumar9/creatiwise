import starIcon from "../assets/star.png";

import { works } from "../constants/Constant";

const Works = () => {
  return (
    <div className="worksContainer flex flex-col gap-8 py-8 px-4 md:py-16 md:px-[10%]">
      <div className="syne-text flex justify-between items-center">
        <h2 className="font-bold text-2xl md:text-4xl flex gap-2 text-white">
          <img
            alt="icon"
            loading="lazy"
            width="24"
            height="24"
            decoding="async"
            src={starIcon}
          />
          Works
        </h2>
        <div className="underline underline-offset-4 cursor-pointer text-white text-sm md:text-base">
          View All
        </div>
      </div>
      {works.map((work, index) => (
        <div
          key={index}
          className="workBox relative rounded-2xl md:rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 bg-[#CBCBCB7A] overflow-hidden"
        >
          <div className="absolute top-[70%] left-[50%] w-32 h-32 md:w-64 md:h-64 bg-orange-700 opacity-50 rounded-full blur-[100px] md:blur-[150px]"></div>

          <div className="overflow-hidden rounded-xl md:rounded-3xl relative z-10">
            <img
              alt={work.title}
              loading="lazy"
              className="w-full h-[200px] md:h-[429px] object-cover"
              src={work.image}
            />
          </div>
          <div className="flex flex-col justify-between relative z-10">
            <div className="flex flex-col gap-4">
              <h3 className="syne-text text-2xl md:text-4xl text-white font-semibold">
                {work.title}
              </h3>
              <p className="text-sm md:text-lg text-white">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="syne-text border border-white text-xs md:text-sm py-1 px-4 md:py-2 md:px-6 rounded-full text-white"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="syne-text my-2 font-semibold text-xs md:text-sm text-black bg-white py-2 px-6 md:py-4 md:px-8 rounded-full w-fit cursor-pointer shadow-md hover:bg-gray-100">
              View Case Study
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
