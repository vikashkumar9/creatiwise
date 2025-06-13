import Slider from "react-slick";
import starIcon from "../assets/star.png";
import figma from "../assets/figma.png";
import designer from "../assets/designer.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollingIcons = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    variableWidth: true,
  };

  const icons = [
    { src: starIcon, alt: "Star Icon", width: 56, height: 56 },
    {
      src: figma,
      alt: "Figma Icon",
      width: 217,
      height: 88,
    },
    { src: starIcon, alt: "Star Icon", width: 56, height: 56 },
    { src: designer, alt: "Designer Icon", width: 341, height: 88 },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {icons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center px-4">
            <img
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollingIcons;
