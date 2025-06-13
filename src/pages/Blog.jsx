import starIcon from "../assets/star.png";
import { blogs } from "../constants/Constant";
const Blog = () => {
  return (
    <div className="blogContainer py-8 px-4 md:py-16 md:px-[10%] flex flex-col gap-8">
      <div className="flex justify-between items-center">
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
          Blog
        </h2>
        <div className="text-white text-sm md:text-base underline underline-offset-4 cursor-pointer">
          View All
        </div>
      </div>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
        >
          <div className="imgContainer overflow-hidden h-[150px] md:h-[215px] w-full md:w-[285px] rounded-3xl">
            <img
              alt={blog.title}
              loading="lazy"
              className="w-full h-full object-cover"
              src={blog.image}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="text-[#CBCBCB] text-sm md:text-lg">
                {blog.date}
              </div>
              <h3 className="syne-text font-semibold text-white text-lg md:text-[40px]">
                {blog.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {blog.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="syne-text py-1 md:py-2 text-white px-4 md:px-6 rounded-[100px] border border-[#FFFFFF] text-xs md:text-base"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="syne-text bg-[#FFFFFF] rounded-[100px] py-2 px-6 md:py-4 md:px-8 text-[#010208] cursor-pointer mt-4 md:mt-0">
              Read
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
