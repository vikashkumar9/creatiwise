import avatar1 from "../assets/avatar1.png";
import brand from "../assets/brand.png";
import dora from "../assets/dora.png";
import wave from "../assets/wave.png";
import sils from "../assets/sils.png";

const About = () => {
  return (
    <div>
      <div className="homeContainer py-[80px] md:py-[176px] px-6 md:px-[10%]">
        <div className="flex flex-col gap-16 md:gap-28">
          <div className="syne-text text-[24px] md:text-[64px] font-extrabold flex flex-wrap items-center gap-2 md:gap-4 justify-center text-center text-white">
            I AM A
            <span className="syne-text inline-flex items-center w-[80px] h-[40px] md:w-[128px] md:h-[64px] rounded-full">
              <img
                alt="avatar-1"
                loading="lazy"
                width="128"
                height="64"
                decoding="async"
                src={avatar1}
                style={{ color: "transparent" }}
              />
            </span>
            <span> FREELANCE </span>
            <span> DESIGNER</span>
            <span className="syne-text inline-flex items-center w-[80px] h-[40px] md:w-[128px] md:h-[64px] rounded-full">
              <img
                alt="avatar-2"
                loading="lazy"
                width="128"
                height="64"
                decoding="async"
                src={brand}
                style={{ color: "transparent" }}
              />
            </span>
            <span> FROM</span>
            SAN FRANCISCO
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[136px] items-center">
            <li className="syne-text flex gap-2 items-center text-base md:text-2xl text-[#CBCBCB]">
              <img
                alt="flash-icon"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                src={dora}
                style={{ color: "transparent" }}
              />
              doradesign
            </li>
            <li className="syne-text list-none">
              <img
                alt="wavefun"
                loading="lazy"
                width="99"
                height="32"
                decoding="async"
                className="min-w-[80px] md:min-w-[99px]"
                src={wave}
                style={{ color: "transparent" }}
              />
            </li>
            <li className="syne-text list-none">
              <img
                alt="susila"
                loading="lazy"
                width="99"
                height="32"
                decoding="async"
                className="min-w-[80px] md:min-w-[99px]"
                src={sils}
                style={{ color: "transparent" }}
              />
            </li>
            <li className="syne-text list-none text-sm md:text-base text-[#CBCBCB] text-center md:text-left">
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
