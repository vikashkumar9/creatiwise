import starIcon from "../assets/star.png";
import { expertiseItems } from "../constants/Constant";
const Expertise = () => {
  return (
    <div className="expertise py-8 px-4 md:py-16 md:px-[10%] flex flex-col gap-8 md:gap-16">
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
        Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {expertiseItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="relative pl-6">
              <span className="absolute left-[5px] top-[10px] w-[6px] h-[6px] bg-white block"></span>
              <span className="syne-text font-semibold text-lg md:text-xl text-white">
                {item.title}
              </span>
            </h3>
            <p className="text-sm md:text-base text-[#CBCBCB]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
