const Footer = () => {
  return (
    <div className="footerContainer pt-[40px] md:pt-[112px] pb-[32px] px-[5%] md:px-[10%] flex flex-col gap-8">
      <div className="flex flex-col gap-8 items-center text-center">
        <h1 className="syne-text text-[32px] md:text-[64px] text-white font-extrabold">
          LET’S TALK!
        </h1>
        <p className="text-sm md:text-lg text-white">
          vikashparjapati59@gmail.com
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-xs md:text-sm text-white text-center">
          © Rehan Raihan - 2023
        </div>
        <div>
          <ul className="syne-text flex gap-4 md:gap-8 justify-center">
            <li className="cursor-pointer text-white text-sm md:text-base">
              Dribbble
            </li>
            <li className="cursor-pointer text-white text-sm md:text-base">
              Behance
            </li>
            <li className="cursor-pointer text-white text-sm md:text-base">
              Twitter
            </li>
            <li className="cursor-pointer text-white text-sm md:text-base">
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
