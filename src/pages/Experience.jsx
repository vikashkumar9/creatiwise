import starIcon from "../assets/star.png";
import { experiences } from "../constants/Constant";

const Experience = () => {
  return (
    <div className="experienceContainer flex flex-col py-8 px-4 md:py-16 md:px-[10%] gap-8">
      <h3 className="syne-text font-bold text-white text-2xl md:text-[40px] flex gap-2 items-center">
        <img
          alt="star-icon"
          loading="lazy"
          width="24"
          height="24"
          decoding="async"
          src={starIcon}
        />
        Experience
      </h3>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-[1.5px] border-[#FFFFFF80] py-4 gap-4"
        >
          <h4 className="syne-text text-white font-medium text-xl md:text-[32px]">
            {experience.role}
          </h4>
          <div className="flex flex-col gap-1 md:gap-2 text-left md:text-right">
            <h5 className="syne-text text-white font-semibold text-base md:text-2xl">
              {experience.company}
            </h5>
            <div className="text-white text-sm md:text-base">
              {experience.duration}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
